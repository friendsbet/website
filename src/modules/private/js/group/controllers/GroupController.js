define([
    'angular',
    'private/group/GroupApp'
], function(ng,GroupApp){

    GroupApp.controller('GroupController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.home;
    }]);

});