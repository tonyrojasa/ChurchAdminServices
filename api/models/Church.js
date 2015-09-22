/**
 * Church.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
        contactInfo: {
            collection: 'ContactInfo',
            required: true
        },
        pastors: {
            collection: 'Person',
            via: 'church'
        },
        members: {
            collection: 'Person',
            via: 'church'
        },
        events: {
            collection: 'Event',
            via: 'church'
        },
        organizations: {
            collection: 'Organization',
            via: 'church'
        },
        name: {
            type: 'string',
            columnName: 'name',
            required: true
        },
        description: {
            type: 'string',
            columnName: 'description'
        }
    }
};