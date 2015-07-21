define([
    'angular',
    'angular-route',
    'angular-ui-bootstrap',
    'angular-ui-router',

    'main/manifest',
    'core/manifest',
    'public/manifest',
    'private/manifest'
],function(ng){

    var app = ng.module('app',[
        'ngRoute',
        'ui.router',
        'ui.bootstrap',
        'CoreApp',
        'HeaderApp',
        'HomeApp',
        'AboutApp',
        'BlogApp',
        'ContactApp',
        'TestimonialsApp',
        'AuthenticationApp',
        'NotificationsApp',
        'GlobalRankingApp',
        'MygroupsApp',
        'MeApp',
        'HelpApp',
        'BetApp',
        'FooterApp',
        'CalendarApp'
    ]);
    app.config(['$httpProvider', function($httpProvider) {
        //Enable cross domain with credentials calls
        $httpProvider.defaults.withCredentials = true;
    }]);

    ng.element(document).ready(function () {
        ng.bootstrap(document, ['app']);
    });
});