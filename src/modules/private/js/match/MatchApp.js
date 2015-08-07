define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/private/match/match'
], function(ng, CommonResolveStateService) {

    var app = ng.module('MatchApp', []);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('', '/match');
            $urlRouterProvider.when('#', '/match');
            $stateProvider
                .state('match', CommonResolveStateService({
                    url: '/match',
                    views: {
                        'main-content': {
                            template: TEMPLATES['views/private/match/match'],
                            controller: 'MatchController'
                        }
                    }
                }))
                .state('id', CommonResolveStateService({
                    url: '/match/{id}',
                    views: {
                        'main-content': {
                            template: TEMPLATES['views/private/match/match'],
                            controller: 'MatchController'
                        }
                    }
                }));
        }
    ]);
    return app;
})