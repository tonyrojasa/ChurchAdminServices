/**
 * GeoLocation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
        parentGeoLocation: {
            model: 'GeoLocation'
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