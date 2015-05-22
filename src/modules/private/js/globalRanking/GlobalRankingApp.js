define([
    'angular',
    'core/services/CommonResolveStateService',
    'views/private/globalRanking/globalRanking'
],function(ng,CommonResolveStateService){

    var app = ng.module('GlobalRankingApp',[]);

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('','/globalRanking');
            $urlRouterProvider.when('#','/globalRanking');
            $stateProvider
                .state('globalRanking', CommonResolveStateService({
                    url: '/globalRanking',
                    views: {
                        'main-content':{
                            template: TEMPLATES['views/private/globalRanking/globalRanking'],
                            controller: 'GlobalRankingController'
                        }
                    }
                }));
    }]);
    return app;
})