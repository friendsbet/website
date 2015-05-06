define([
    'angular',
    'angular-route',
    'angular-ui-bootstrap',
    'angular-ui-router',

    'main/manifest',
    'core/manifest',
    'about/manifest',
    'contact/manifest',
    'blog/manifest',
    'testimonials/manifest',
    'authentication/manifest'
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
        'AuthenticationApp'
    ]);

    ng.element(document).ready(function () {
        ng.bootstrap(document, ['app']);
    });
});