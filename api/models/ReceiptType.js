/**
 * ReceiptType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
        name: {
            type: 'string',
            columnName: 'name'
        },
        type: {
            type: 'string',
            enum: ['debit', 'credit'],
            columnName: 'type'
        },
        description: {
            type: 'string',
            columnName: 'description'
        }
    }
};