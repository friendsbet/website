define([
    'angular',
    'core/CoreApp',
    'core/config/SERVERPATH'

], function(ng, CoreApp, SERVERPATH) {
    CoreApp.service('TeamService', ['ApiService',
        function(ApiService) {
            var TeamService = function() {
                this.teams = null
            };

            TeamService.prototype.getTeams = function() {
                var req = {
                    method: "get",
                    url: SERVERPATH.API + "teams"
                };
                ApiService.httpRequest(req)
                    .success(function(response) {
                        console.log(response)
                    })
                    .error(function(response) {
                        console.log(response)
                    });
            };

            return new TeamService();
        }
    ]);
});