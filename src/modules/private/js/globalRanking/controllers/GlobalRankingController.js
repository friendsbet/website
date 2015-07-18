define([
    'angular',
    'private/globalRanking/GlobalRankingApp'
], function(ng,GlobalRankingApp){

    GlobalRankingApp.controller('GlobalRankingController',['$rootScope','$scope','localeService','GroupsService',function($rootScope,$scope,localeService,GroupsService){
        $rootScope.displayToolbar = true;
        var groups=new GroupsService();
    }]);

});