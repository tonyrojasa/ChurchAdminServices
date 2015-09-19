/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
        person_id: {
            type: 'integer',
            unique: true,
            columnName: 'person_id',
            required: true
        },
        church: {
            model: 'Church'
        },
        name: {
            type: 'string',
            columnName: 'name',
            required: true
        },
        firstName: {
            type: 'string',
            columnName: 'firstName',
            required: true
        },
        lastName: {
            type: 'string',
            columnName: 'lastName',
            required: true
        },
        activeMember: {
            type: 'boolean',
            columnName: 'activeMember',
            required: true
        },
        address: {
            type: 'string',
            columnName: 'address'
        },
        location: {
            model: 'geoLocation'
        },
        contactInfo: {
            collection: 'ContactInfo',
            via: 'person',
            required: true
        },
        events: {
            collection: 'PersonEnrolment',
            via: 'person'
        },
        personType: {
            collection: 'PersonType',
            required: true
        },

    }

};