define([
    'angular',
    'private/globalRanking/GlobalRankingApp'

], function(ng, GlobalRankingApp) {
    GlobalRankingApp.service('GroupsService', function() {
        var GroupsService = function() {
        	this.name='';
        	this.score=null;
        	this.description='';
        };


        return GroupsService;
    });
});