const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NuxtApp } = require('@keystonejs/app-nuxt');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const QuestionSchema = require('./lists/Question')
const UserSchema = require ('./lists/User')

const PROJECT_NAME = 'Questions';
const adapterConfig = { mongoUri: 'mongodb://localhost:27017/opsdroid' }; // TODO: Move this to envvar


const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(adapterConfig),

  onConnect: async keystone => {
    await keystone.createItems({
      User: [
        {name: "FabioRosado", email: "fabio@example.com", password: "password123", isAdmin: true} // TODO: Move this to envvar
      ]
    })
  }
});

keystone.createList("Question", QuestionSchema)
keystone.createList("User", UserSchema)

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User'
})




module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({name: PROJECT_NAME, authStrategy}),
    new NuxtApp({
      srcDir: 'src',
      buildDir: 'dist',
    }),
  ],
};
