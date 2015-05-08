define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/public/about/about'
],function(ng,CommonResolveStateService){

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
                            template: TEMPLATES['views/public/about/about'],
                            controller: 'AboutController'
                        }
                    }
                }));
    }]);
    return app;
})