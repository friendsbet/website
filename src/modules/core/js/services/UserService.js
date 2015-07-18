define([
    'angular',
    'core/CoreApp'

], function(ng, CoreApp) {
    CoreApp.service('UserService', function() {
        var UserService = function() {
            this.user=new User();
        };


        return UserService;
    });
});