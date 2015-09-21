/**
 * ServiceAcademy.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
        place: {
            model: 'RegistrationPlace',
            required: true
        },
        serviceArea: {
            model: 'ServiceArea',
            required: true
        },
        leaders: {
            collection: 'Person',
            required: true
        },
        classes: {
            collection: 'ServiceAcademyClass',
            via: 'serviceAcademy'
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
        level: {
            type: 'integer',
            columnName: 'level',
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
        meetingDays: {
            type: 'string',
            enum: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            columnName: 'meetingDays'
        },
        meetingSchedule: {
            type: 'array',
            columnName: 'meetingSchedule'
        }
    }
};