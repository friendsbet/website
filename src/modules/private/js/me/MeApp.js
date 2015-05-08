define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/private/me/me'
],function(ng,CommonResolveStateService){

    var app = ng.module('MeApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/me');
            $urlRouterProvider.when('#','/me');
            $stateProvider
                .state('me', CommonResolveStateService({
                    url: '/me',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/private/me/me'],
                            controller: 'MeController'
                        }
                    }
                }));
    }]);
    return app;
})