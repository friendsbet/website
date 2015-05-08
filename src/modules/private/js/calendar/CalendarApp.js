define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/private/calendar/calendar'
],function(ng,CommonResolveStateService){

    var app = ng.module('CalendarApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/calendar');
            $urlRouterProvider.when('#','/calendar');
            $stateProvider
                .state('calendar', CommonResolveStateService({
                    url: '/calendar',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/private/calendar/calendar'],
                            controller: 'CalendarController'
                        }
                    }
                }));
    }]);
    return app;
})