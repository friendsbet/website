define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/public/contact/contact'
],function(ng,CommonResolveStateService){

    var app = ng.module('ContactApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/contact');
            $urlRouterProvider.when('#','/contact');
            $stateProvider
                .state('contact', CommonResolveStateService({
                    url: '/contact',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/public/contact/contact'],
                            controller: 'ContactController'
                        }
                    }
                }));
    }]);
    return app;
})