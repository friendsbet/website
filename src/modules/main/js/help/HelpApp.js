define([
    'angular',
    'views/main/help/help',
    'core/services/CommonResolveStateService'
],function(ng,helpApp,CommonResolveStateService){

    var app = ng.module('HelpApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/help');
            $urlRouterProvider.when('#','/help');
            $stateProvider
                .state('help', CommonResolveStateService({
                    url: '/help',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/main/help/help'],
                            controller: 'HelpController'
                        }
                    }
                }));
    }]);
    return app;
})