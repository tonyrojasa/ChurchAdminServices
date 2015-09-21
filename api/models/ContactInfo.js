/**
 * ContactInfo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
        value: {
            type: 'string',
            columnName: 'value',
            required: true
        },
        type: {
            type: 'string',
            enum: ['homePhone', 'cellPhone', 'workPhone', 'emailAddress'],
            columnName: 'type'
        },
        person: {
            model: 'Person',
            required: true
        }
    }
};