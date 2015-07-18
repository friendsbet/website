define([
    'angular',
    'core/CoreApp'

], function(ng, CoreApp) {
    CoreApp.factory('User', function() {
        var User = function() {
            this.email = '';
            this.firstName = '';
            this.lastName = '';
            this.description = '';
        };

        User.prototype.init = function(data) {
            this.email = data.email;
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.description = data.description;
            return this;
        };

        User.prototype.reset = function() {
            this.email = '';
            this.firstName = '';
            this.lastName = '';
            this.description = '';
        };

        return User;
    });
});