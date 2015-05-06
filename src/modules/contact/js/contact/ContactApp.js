define([
    'angular',
    'views/contact/contact/contact',
    'core/services/CommonResolveStateService'
],function(ng,HomeApp,CommonResolveStateService){

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
                            template: TEMPLATES['views/contact/contact/contact'],
                            controller: 'ContactController'
                        }
                    }
                }));
    }]);
    return app;
})