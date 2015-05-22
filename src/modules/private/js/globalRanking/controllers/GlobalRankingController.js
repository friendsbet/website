define([
    'angular',
    'private/globalRanking/GlobalRankingApp'
], function(ng,GlobalRankingApp){

    GlobalRankingApp.controller('GlobalRankingController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
    }]);

});