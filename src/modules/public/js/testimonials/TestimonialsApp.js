define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/public/testimonials/testimonials'
], function(ng, CommonResolveStateService) {

    var app = ng.module('TestimonialsApp', []);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('', '/testimonials');
            $urlRouterProvider.when('#', '/testimonials');
            $stateProvider
                .state('testimonials', CommonResolveStateService({
                    url: '/testimonials',
                    views: {
                        'main-content': {
                            template: TEMPLATES['views/public/testimonials/testimonials'],
                            controller: 'TestimonialsController'
                        }
                    }
                }));
        }
    ]);
    return app;
})