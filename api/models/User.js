var User = {
    // Enforce model schema in the case of schemaless databases
    schema: true,

    attributes: {
        username: {
            type: 'string',
            unique: true
        },
        email: {
            type: 'email',
            unique: true
        },
        passports: {
            collection: 'Passport',
            via: 'user'
        },
        person: {
            model: 'Person'
        }
    },
    hello: function() {
        return 'Hello from model';
    }
};

module.exports = User;