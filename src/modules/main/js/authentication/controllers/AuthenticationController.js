define([
    'angular',
    'main/authentication/AuthenticationApp'
], function(ng,AuthenticationApp){

    AuthenticationApp.controller('AuthenticationController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.home;
    }]);

});