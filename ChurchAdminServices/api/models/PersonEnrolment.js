/**
 * PersonEnrolment.js
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
        event: {
            model: 'Event',
            required: true
        },
        enrolmentDate: {
            type: 'date',
            columnName: 'enrolmentDate',
            required: true
        },
        person: {
            model: 'Person',
            required: true
        },
        receipt: {
            collection: 'Receipt'
        },
        sponsor: {
            type: 'string',
            columnName: 'sponsor'
        },
        attended: {
            type: 'string',
            columnName: 'attended'
        }
    }
};