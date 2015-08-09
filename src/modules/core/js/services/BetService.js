define([
    'angular',
    'core/CoreApp',
    'core/config/SERVERPATH'

], function(ng, CoreApp,SERVERPATH) {
    CoreApp.service('BetService', ['ApiService',
        function(ApiService) {
            var BetService = function() {
                this.scoreTeamA = null;
                this.scoreTeamB = null;
            };
            BetService.prototype.postBet = function(token, userId, matchId, betA, betB, thisScore) {
                var req = {
                    params: {
                        _csrf: token,
                        user: userId,
                        match: matchId,
                        scoreTeamA: betA,
                        scoreTeamB: betB,
                        score: thisScore
                    },
                    method: "POST",
                    url: SERVERPATH.API + 'bets'
                };
                return ApiService.httpRequest(req)
            }
            return new BetService();
        }
    ]);
});