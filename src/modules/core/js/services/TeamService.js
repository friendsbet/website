define([
    'angular',
    'core/CoreApp'

], function(ng, CoreApp) {
    CoreApp.service('TeamService', ['ApiService',function(ApiService) {
        var TeamService = function() {
        	this.teams=null
        };

        TeamService.prototype.getTeams=function(){
        	ApiService.getTeams();
        };
        console.log('TeamServices')

        return new TeamService();
    }]);
});