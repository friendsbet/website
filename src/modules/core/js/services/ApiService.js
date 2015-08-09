define([
    'angular',
    'core/CoreApp',
    'core/config/SERVERPATH'
], function(ng, CoreApp, SERVERPATH) {
    CoreApp.service('ApiService', ['$http',
        function($http) {
            var ApiService = function() {};

            ApiService.prototype.httpRequest = function(req, callback) {
                return $http(req).success(function(response) {
                    if (callback && typeof callback == "function") {
                        return callback(response);
                    }
                });
            }



            ApiService.prototype.getCsrfToken = function() {
                var req = {
                    method: "GET",
                    url: SERVERPATH.SERVER + 'csrfToken'
                };
                return this.httpRequest(req)
            };



            return new ApiService();
        }
    ]);
});