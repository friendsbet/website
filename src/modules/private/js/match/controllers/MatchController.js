define([
    'angular',
    'private/match/MatchApp'
], function(ng, MatchApp) {

    MatchApp.controller('MatchController', ['$rootScope', '$scope', 'localeService', 'User', 'MatchService', '$stateParams', 'ApiService','BetService', 
        function($rootScope, $scope, localeService, User, MatchService, $stateParams, ApiService,BetService) {
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

            $scope.setBet = function(matchId, betA, betB) {
                ApiService.getCsrfToken()
                    .success(function(token) {
                        var userId='55c482845db50cd0352d2c2e'
                        BetService.postBet(token._csrf,userId,matchId,betA,betB)
                            .success(function(reply){
                                console.log(reply)
                            })
                            .error(function(reply){
                                console.log(reply)
                            })
                    })
                    .error(function(response) {
                        console.log(response)
                    })
            }

            $scope.init($stateParams);

        }
    ]);

});