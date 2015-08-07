define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/private/group/group'
],function(ng,CommonResolveStateService){

    var app = ng.module('GroupApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/group');
            $urlRouterProvider.when('#','/group');
            $stateProvider
                .state('group', CommonResolveStateService({
                    url: '/group',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/private/group/group'],
                            controller: 'GroupController'
                        }
                    }
                }));
    }]);
    return app;
})