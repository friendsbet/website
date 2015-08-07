define([
    'angular',
    'private/calendar/CalendarApp'
], function(ng, CalendarApp) {

    CalendarApp.controller('CalendarController', ['$rootScope', '$scope', 'localeService', 'MatchService','$location',
        function($rootScope, $scope, localeService, MatchService,$location) {
            $rootScope.displayToolbar = true;
            $scope.text = localeService.data.private.calendar;

            MatchService.getMatches()
                .success(function(response) {
                    $scope.matches = response;
                })
                .error(function(response) {
                    console.log(response);
                });

            $scope.loadMatch=function(id){
                $location.path('/match/'+id);
            }

        }
    ]);

});