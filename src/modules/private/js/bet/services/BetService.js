define([
    'angular',
    'private/bet/BetApp'

], function(ng,BetApp) {
    BetApp.factory('BetService',['UserService', function(UserService) {
        var Bet = function() {
            this.scoreTeamA = null;
            this.scoreTeamB = null;
        };


        return Bet;
    }]);
});