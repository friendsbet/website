define([
    'main/footer/FooterApp'
],function(FooterApp){

    FooterApp.controller('FooterController',['$rootScope','$scope','localeService',function($rootScope, $scope, localeService){
        localeService.resolve().then(function(locale){
            $scope.text = locale.data.main.Footer;
        });
    }]);
})