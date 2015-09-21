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
        memberTimeYears: {
            type: 'float',
            columnName: 'memberTimeYears'
        },
        serviceAcademyClass: {
            collection: 'serviceAcademyClass',
            via: 'members'
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
        birthDate: {
            type: 'date',
            columnName: 'birthDate'
        },
        age: {
            type: 'integer',
            columnName: 'age'
        },
        maritalStatus: {
            type: 'string',
            enum: ['married', 'single', 'divorced', 'widower', 'freeUnion', 'other'],
            columnName: 'maritalStatus',
            required: true
        },
        grade: {
            type: 'string',
            columnName: 'grade'
        },
        occupation: {
            type: 'string',
            columnName: 'grade'
        },
        employer: {
            type: 'string',
            columnName: 'grade'
        },
        shirtSize: {
            type: 'string',
            columnName: 'shirtSize'
        },
        medicalTreatment: {
            type: 'string',
            columnName: 'medicalTreatment'
        },
        medicineType: {
            type: 'string',
            columnName: 'medicineType'
        },
        allergies: {
            type: 'string',
            columnName: 'allergies'
        }

    }

};