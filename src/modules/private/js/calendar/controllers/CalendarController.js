define([
    'angular',
    'private/calendar/CalendarApp',
    'moment',
    'lodash'
], function(ng, CalendarApp,moment,_) {

    CalendarApp.controller('CalendarController', ['$rootScope', '$scope', 'localeService', 'MatchService','$location',
        function($rootScope, $scope, localeService, MatchService,$location) {
            $rootScope.displayToolbar = true;
            $scope.text = localeService.data.private.calendar;

            MatchService.getMatches()
                .success(function(response) {

                    _.each(response, function(match) {
                        
                        match.kickOffAtFormat=moment(match.kickOffAt).format("hh:mm a, MM/DD")
                        match.stopBetsAtFormat=moment(match.stopBetsAt).format("hh:mm a, MM/DD")
                        match.updatedAtFormat=moment(match.updatedAt).format("hh:mm a, MM/DD")
                        match.createdAtFormat=moment(match.createdAt).format("hh:mm a, MM/DD")
                    })
                    $scope.matches = response;
                })
                .error(function(response) {
                    console.log(response);
                });

            $scope.loadMatch=function(id){
                $location.path('/match/'+id);
            }

            $scope.formatDate=function(date,format){
                return moment(date).format(format)
            }
        }
    ]);

});