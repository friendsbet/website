define([
    'angular',
    'main/home/HomeApp'
], function(ng,HomeApp){

    HomeApp.controller('HomeController',['$rootScope','$scope','localeService','TeamService',function($rootScope,$scope,localeService,TeamService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.home;
        console.log(TeamService)
        TeamService.getTeams();
    }]);

});