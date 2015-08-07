define([
    'angular',
    'private/calendar/CalendarApp'
], function(ng, CalendarApp) {

    CalendarApp.controller('CalendarController', ['$rootScope', '$scope', 'localeService', 'MatchService',
        function($rootScope, $scope, localeService, MatchService) {
            $rootScope.displayToolbar = true;
            $scope.text = localeService.data.private.calendar;

            MatchService.getMatches()
                .success(function(response) {
                    $scope.matches = response;
                })
                .error(function(response) {
                    console.log(response);
                });



        }
    ]);

});