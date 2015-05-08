define([
    'angular',
    'private/calendar/CalendarApp'
], function(ng,CalendarApp){

    CalendarApp.controller('CalendarController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.home;
    }]);

});