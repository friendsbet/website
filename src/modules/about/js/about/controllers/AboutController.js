define([
    'angular',
    'about/about/AboutApp'
], function(ng,AboutApp){

    AboutApp.controller('AboutController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.home;
    }]);

});