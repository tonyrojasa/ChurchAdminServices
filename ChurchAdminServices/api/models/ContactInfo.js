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
        ContactInfoValue: {
            type: 'string',
            columnName: 'ContactInfoValue',
            required: true
        },
        ContactInfoType: {
            type: 'string',
            enum: ['homePhone', 'cellPhone', 'workPhone', 'emailAddress'],
            columnName: 'ContactInfoType'
        },
        person: {
            model: 'Person',
            required: true
        }
    }
};