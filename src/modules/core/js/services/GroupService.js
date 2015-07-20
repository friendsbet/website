define([
    'angular',
    'core/CoreApp'

], function(ng, CoreApp) {
    CoreApp.service('GroupService', function() {
        var GroupService = function() {
        	this.name='';
        	this.score=null;
        	this.description='';
        };

        console.log('GroupServices')
        return new GroupService();
    });
});