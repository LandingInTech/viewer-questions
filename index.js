const { Keystone } = require('@keystonejs/keystone');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NuxtApp } = require('@keystonejs/app-nuxt');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const QuestionSchema = require('./lists/Question')

const PROJECT_NAME = 'Questions';
const adapterConfig = { mongoUri: 'mongodb://localhost:27017/opsdroid' };


const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(adapterConfig),
});

keystone.createList("Question", QuestionSchema)

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp(),
    new NuxtApp({
      srcDir: 'src',
      buildDir: 'dist',
    }),
  ],
};
