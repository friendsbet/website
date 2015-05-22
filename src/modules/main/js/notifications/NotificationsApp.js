define([
    'angular',
    'views/main/notifications/notifications',
    'core/services/CommonResolveStateService'
],function(ng,notificationsApp,CommonResolveStateService){

    var app = ng.module('NotificationsApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/notifications');
            $urlRouterProvider.when('#','/notifications');
            $stateProvider
                .state('notifications', CommonResolveStateService({
                    url: '/notifications',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/main/notifications/notifications'],
                            controller: 'NotificationsController'
                        }
                    }
                }));
    }]);
    return app;
})