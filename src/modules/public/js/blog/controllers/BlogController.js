define([
    'angular',
    'public/blog/BlogApp'
], function(ng,BlogApp){

    BlogApp.controller('BlogController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.public.blog;
    }]);

});