define([
    'angular',
    'core/CoreApp'

], function(ng, CoreApp) {
    CoreApp.service('MatchService', function() {
        var MatchService = function() {
            console.log('MatchService');
        };


        return MatchService;
    });
});