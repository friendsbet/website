define([
    'angular',
    'views/testimonials/testimonials/testimonials',
    'core/services/CommonResolveStateService'
],function(ng,HomeApp,CommonResolveStateService){

    var app = ng.module('TestimonialsApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/testimonials');
            $urlRouterProvider.when('#','/testimonials');
            $stateProvider
                .state('testimonials', CommonResolveStateService({
                    url: '/testimonials',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/testimonials/testimonials/testimonials'],
                            controller: 'TestimonialsController'
                        }
                    }
                }));
    }]);
    return app;
})