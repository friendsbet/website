define([
    'angular',
    'private/user/UserApp'
], function(ng, UserApp) {

    UserApp.controller('UserController', ['$rootScope', '$scope', 'localeService', 'User', '$stateParams', 'UserService',
        function($rootScope, $scope, localeService, User, $stateParams, UserService) {
            $rootScope.displayToolbar = true;
            $scope.text = localeService.data.main.home;
            $scope.isUser=false;

            $scope.init = function($stateParams) {
                if ($stateParams.userId) {
                    UserService.getUser($stateParams.userId)
                        .success(function(response) {
                            $scope.thisUser = response
                            $scope.isUser=true;
                        })
                        .error(function(response) {
                            console.log(response)
                        })
                } else {
                    UserService.getUsersList()
                        .success(function(response) {
                            $scope.userList = response
                        })
                        .error(function(response) {
                            console.log(response)
                        })
                }
            }

            $scope.init($stateParams);
        }
    ]);

});