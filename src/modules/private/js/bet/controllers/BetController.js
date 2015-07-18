define([
    'angular',
    'private/bet/BetApp'
], function(ng,BetApp){

    BetApp.controller('BetController',['$rootScope','$scope','localeService','BetService',function($rootScope,$scope,localeService,BetService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.hoBet;

        var bet=new BetService();
        console.log(bet)
    }]);

});