define([
    'angular',
    'core/CoreApp',
    'core/config/SERVERPATH'

], function(ng, CoreApp, SERVERPATH) {
    CoreApp.service('MatchService', ['ApiService',
        function(ApiService) {
            var MatchService = function() {};

            MatchService.prototype.getMatches = function(nbOfMatches) {
                var req = {
                    params:{
                        limit:nbOfMatches,
                        populate:'[teamA,teamB]'
                    },
                    method: "GET",
                    url: SERVERPATH.API + 'matches'
                };
               return ApiService.httpRequest(req)
            };


            return new MatchService();
        }
    ]);
});