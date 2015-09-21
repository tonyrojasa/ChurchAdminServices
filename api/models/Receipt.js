/**
 * Receipt.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
        number: {
            type: 'integer',
            columnName: 'number',
            unique: true,
            autoIncrement: true
        },
        person: {
            model: 'Person'
        },
        receivedFrom: {
            type: 'string',
            columnName: 'receivedFrom'
        },
        receivedBy: {
            model: 'Person',
            required: true
        },
        type: {
            model: 'ReceiptType',
            required: true
        },
        parentReceipt: {
            model: 'Receipt'
        },
        balance: {
            type: 'float',
            columnName: 'balance',
            required: true
        },
        amount: {
            type: 'float',
            columnName: 'amount',
            required: true
        },
        paidBy: {
            type: 'string',
            enum: ['cash', 'check', 'creditCard'],
            columnName: 'paidBy',
            required: true
        },
        currency: {
            type: 'string',
            enum: ['colones', 'dollars'],
            columnName: 'currency',
            required: true
        },
        for: {
            type: 'string',
            columnName: 'for',
            required: true
        },
        description: {
            type: 'string',
            columnName: 'description'
        }
    }
};