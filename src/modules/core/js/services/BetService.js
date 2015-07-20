define([
    'angular',
    'core/CoreApp'

], function(ng,CoreApp) {
    CoreApp.factory('BetService',['UserService', function(UserService) {
        var BetService = function() {
            this.scoreTeamA = null;
            this.scoreTeamB = null;
        };
        console.log('BetService')

        return new BetService();
    }]);
});