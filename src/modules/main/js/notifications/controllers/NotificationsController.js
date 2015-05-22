define([
    'angular',
    'main/notifications/NotificationsApp'
], function(ng,NotificationsApp){

    NotificationsApp.controller('NotificationsController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.notifications;
    }]);

});