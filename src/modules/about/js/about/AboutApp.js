define([
    'angular',
    'views/about/about/about',
    'core/services/CommonResolveStateService'
],function(ng,HomeApp,CommonResolveStateService){

    var app = ng.module('AboutApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/about');
            $urlRouterProvider.when('#','/about');
            $stateProvider
                .state('about', CommonResolveStateService({
                    url: '/about',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/about/about/about'],
                            controller: 'AboutController'
                        }
                    }
                }));
    }]);
    return app;
})