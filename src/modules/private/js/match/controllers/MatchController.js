define([
    'angular',
    'private/match/MatchApp'
], function(ng, MatchApp) {

    MatchApp.controller('MatchController', ['$rootScope', '$scope', 'localeService', 'User', 'MatchService', '$stateParams',
        function($rootScope, $scope, localeService, User, MatchService, $stateParams) {
            $rootScope.displayToolbar = true;
            $scope.text = localeService.data.main.home;         

            $scope.init = function($stateParams) {
                if ($stateParams.id) {
                    MatchService.getMatch($stateParams.id)
                        .success(function(response) {
                            $scope.match = response
                        })
                        .error(function(response) {
                            console.log(response)
                        })
                }
                else{
                	console.log('no match')
                }
            }

            $scope.init($stateParams);

        }
    ]);

});