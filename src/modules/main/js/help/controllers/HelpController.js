define([
    'angular',
    'main/help/HelpApp'
], function(ng,HelpApp){

    HelpApp.controller('HelpController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.Help;
    }]);

});