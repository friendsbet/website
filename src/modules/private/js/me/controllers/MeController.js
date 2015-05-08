define([
    'angular',
    'private/me/MeApp'
], function(ng,MeApp){

    MeApp.controller('MeController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.home;
    }]);

});