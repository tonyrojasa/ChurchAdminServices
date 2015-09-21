/**
 * HistoricPersonType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
        person: {
            model: 'Person',
            required: true
        },
        personType: {
            model: 'PersonType',
            required: true
        },
        initDate: {
            type: 'date',
            columnName: 'initDate',
            required: true
        },
        endDate: {
            type: 'date',
            columnName: 'endDate'
        },
        description: {
            type: 'string',
            columnName: 'description'
        }
    }
};