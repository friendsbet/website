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
        'MygroupsApp',
        'MeApp',
        'HelpApp',
        'BetApp',
        'FooterApp',
        'CalendarApp'
    ]);

    ng.element(document).ready(function () {
        ng.bootstrap(document, ['app']);
    });
});