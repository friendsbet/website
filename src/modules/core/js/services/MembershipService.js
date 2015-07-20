define([
    'angular',
    'core/CoreApp'

], function(ng, CoreApp) {
    CoreApp.service('MembershipService', function() {
        var MembershipService = function() {
        };

        console.log('MembershipService')
        return new MembershipService();
    });
});