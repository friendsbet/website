define([
    'angular',
    'core/CoreApp',
    'core/config/SERVERPATH'
], function(ng, CoreApp, SERVERPATH) {
    CoreApp.service('ApiService', ['$http',
        function($http) {
            var ApiService = function() {

            };

            ApiService.prototype.HttpRequest = function(req, callback) {
                return $http(req).success(function(response) {
                    if (callback && typeof callback == "function") {
                        return callback(response);
                    }
                });
            };

            ApiService.prototype.getTeams = function(callback) {

                var req = {
                    method: "get",
                    url: SERVERPATH.API + "teams"
                };

                this.HttpRequest(req)
                    .success(function(response) {
                        console.log(response)
                        return true
                    })
                    .error(function(response) {
                        console.log(response)
                        return false
                    })
            };
            console.log('ApiServices')
            return new ApiService();
        }
    ]);
});