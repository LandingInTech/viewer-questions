const { Text, Checkbox } = require('@keystonejs/fields')

module.exports = {
    fields: {
        username: {
            type: Text,
            schemaDoc: 'Viewer username',
            isRequired: true
        },
        question: {
            type: Text,
            schemaDoc: 'Viewer question',
            isRequired: true
        },
        isShown: {
            type: Checkbox,
            schemaDoc: 'Should this question be shown on the stream?',
            defaultValue: false
        },
        wasAsked: {
            type: Checkbox,
            schemaDoc: 'If the question was asked it shouldn\'t be shown on the stream.',
            defaultValue: false, 
        }
    }
}