/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 */

module.exports = {
    hi: function(request, response) {
        response.json({
            text: User.hello()
        });
    }
};