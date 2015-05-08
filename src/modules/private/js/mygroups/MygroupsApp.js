define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/private/mygroups/mygroups'
],function(ng,CommonResolveStateService){

    var app = ng.module('MygroupsApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/mygroups');
            $urlRouterProvider.when('#','/mygroups');
            $stateProvider
                .state('mygroups', CommonResolveStateService({
                    url: '/mygroups',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/private/mygroups/mygroups'],
                            controller: 'MygroupsController'
                        }
                    }
                }));
    }]);
    return app;
})