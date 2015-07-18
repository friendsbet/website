define([
    'angular',
    'private/me/MeApp'
], function(ng,MeApp){

    MeApp.controller('MeController',['$rootScope','$scope','localeService','User',function($rootScope,$scope,localeService,User){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.home;

        var user=new User();

        console.log(user);
    }]);

});