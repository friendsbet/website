define([
    'angular',
    'core/CoreApp'
], function(ng, CoreApp) {
    CoreApp.service('ApiService', ['$http',
        function($http) {
            var ApiService = function() {

            };

            ApiService.prototype.httpRequest = function(req, callback) {
                return $http(req).success(function(response) {
                    if (callback && typeof callback == "function") {
                        return callback(response);
                    }
                });
            };
            return new ApiService();
        }
    ]);
});