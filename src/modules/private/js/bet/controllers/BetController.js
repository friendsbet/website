define([
    'angular',
    'private/bet/BetApp'
], function(ng,BetApp){

    BetApp.controller('BetController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.hoBet;
    }]);

});