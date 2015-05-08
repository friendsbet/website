define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/public/blog/blog'
],function(ng,CommonResolveStateService){

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
                            template: TEMPLATES['views/public/blog/blog'],
                            controller: 'BlogController'
                        }
                    }
                }));
    }]);
    return app;
})