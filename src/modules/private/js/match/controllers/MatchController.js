define([
    'angular',
    'private/match/MatchApp'
], function(ng, MatchApp) {

    MatchApp.controller('MatchController', ['$rootScope', '$scope', 'localeService', 'UserService', 'MatchService', '$stateParams', 'ApiService', 'BetService',
        function($rootScope, $scope, localeService, UserService, MatchService, $stateParams, ApiService, BetService) {
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
                } else {
                    console.log('no match')
                }
            }

            $scope.setBet = function(matchId, betA, betB,user) {
                ApiService.getCsrfToken()
                    .success(function(token) {
                        BetService.postBet(token._csrf, user.id, matchId, betA, betB)
                            .success(function(reply) {
                                console.log(reply)
                            })
                            .error(function(reply) {
                                console.log(reply)
                            })
                    })
                    .error(function(response) {
                        console.log(response)
                    })
            }

            $scope.getRandomUser = function() {
                UserService.getUsersList()
                    .success(function(users) {
                         $scope.user=users[0]
                    })
                    .error(function(error) {
                        console.log(error)
                    })
            }

            $scope.init($stateParams);
            $scope.$watch("$scope.user", function(newVal, OldVal) {});
            $scope.getRandomUser();

        }
    ]);

});