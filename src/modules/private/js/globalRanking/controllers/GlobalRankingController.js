define([
    'angular',
    'private/globalRanking/GlobalRankingApp'
], function(ng,GlobalRankingApp){

    GlobalRankingApp.controller('GlobalRankingController',['$rootScope','$scope','localeService','GroupService',function($rootScope,$scope,localeService,GroupService){
        $rootScope.displayToolbar = true;
        var groups=new GroupService();
    }]);

});