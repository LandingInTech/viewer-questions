const { Text, Checkbox, Password } = require('@keystonejs/fields')

module.exports = {
    fields: {
        name: {
            type: Text,
            isRequired: true,
            isUnique: true
        },
        email: {
            type: Text,
            isRequired: true,
            isUnique: true
        },
        isAdmin: {
            type: Checkbox,
        },
        password: {
            type: Password,
            isRequired: true
        }
    }
}