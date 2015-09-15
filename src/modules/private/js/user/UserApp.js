define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/private/user/user'
], function(ng, CommonResolveStateService) {

    var app = ng.module('UserApp', []);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('', '/user');
            $urlRouterProvider.when('#', '/user');
            $stateProvider
                .state('user', CommonResolveStateService({
                    url: '/user',
                    views: {
                        'main-content': {
                            template: TEMPLATES['views/private/user/user'],
                            controller: 'UserController'
                        }
                    }
                }))
                .state('userId', CommonResolveStateService({
                    url: '/user/{userId}',
                    views: {
                        'main-content': {
                            template: TEMPLATES['views/private/user/user'],
                            controller: 'UserController'
                        }
                    }
                }));;
        }
    ]);
    return app;
})