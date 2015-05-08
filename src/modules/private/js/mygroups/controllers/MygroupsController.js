define([
    'angular',
    'private/mygroups/MygroupsApp'
], function(ng,MygroupsApp){

    MygroupsApp.controller('MygroupsController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.home;
    }]);

});