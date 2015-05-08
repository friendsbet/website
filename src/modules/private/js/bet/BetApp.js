define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/private/bet/bet'
],function(ng,CommonResolveStateService){

    var app = ng.module('BetApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/bet');
            $urlRouterProvider.when('#','/bet');
            $stateProvider
                .state('bet', CommonResolveStateService({
                    url: '/bet',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/private/bet/bet'],
                            controller: 'BetController'
                        }
                    }
                }));
    }]);
    return app;
})