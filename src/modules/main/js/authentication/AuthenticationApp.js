define([
    'angular',
    'core/services/CommonResolveStateService',

    'views/main/authentication/signin',
    'views/main/authentication/signup'
],function(ng,CommonResolveStateService){

    var app = ng.module('AuthenticationApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/signin');
            $urlRouterProvider.when('#','/signin');

            $urlRouterProvider.when('','/signup');
            $urlRouterProvider.when('#','/signup');
            $stateProvider
                .state('signin', CommonResolveStateService({
                    url: '/signin',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/main/authentication/signin'],
                            controller: 'AuthenticationController'
                        }
                    }
                }))
            .state('signup', CommonResolveStateService({
                    url: '/signup',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/main/authentication/signup'],
                            controller: 'AuthenticationController'
                        }
                    }
                }))



                ;
    }]);
    return app;
})