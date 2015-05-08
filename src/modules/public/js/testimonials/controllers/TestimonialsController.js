define([
    'angular',
    'public/testimonials/TestimonialsApp'
], function(ng,TestimonialsApp){

    TestimonialsApp.controller('TestimonialsController',['$rootScope','$scope','localeService',function($rootScope,$scope,localeService){
        $rootScope.displayToolbar = true;
        $scope.text = localeService.data.main.home;
    }]);

});