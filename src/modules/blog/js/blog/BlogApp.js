define([
    'angular',
    'views/blog/blog/blog',
    'core/services/CommonResolveStateService'
],function(ng,BlogApp,CommonResolveStateService){

    var app = ng.module('BlogApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/blog');
            $urlRouterProvider.when('#','/blog');
            $stateProvider
                .state('blog', CommonResolveStateService({
                    url: '/blog',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/blog/blog/blog'],
                            controller: 'BlogController'
                        }
                    }
                }));
    }]);
    return app;
})