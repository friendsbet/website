define([
    'angular',
    'contact/contact/ContactApp'
], function(ng,ContactApp){

    ContactApp.controller('ContactController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.home;
    }]);

});