/**
 * ServiceAcademyClass.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
        serviceAcademy: {
            model: 'ServiceAcademy'
        },
        teachers: {
            collection: 'Person',
            required: true
        },
        members: {
            collection: 'Person',
            via: 'serviceAcademyClass',
            required: true
        },
        name: {
            type: 'string',
            columnName: 'name',
            required: true
        },
        description: {
            type: 'string',
            columnName: 'description'
        },
        classroom: {
            type: 'string',
            columnName: 'classroom'
        },
        date: {
            type: 'date',
            columnName: 'date',
            required: true
        }
    }
};