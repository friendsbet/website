define([
    'angular',
    'core/CoreApp',
    'core/config/SERVERPATH'

], function(ng, CoreApp,SERVERPATH) {
    CoreApp.service('UserService', ['User','ApiService', function(User,ApiService) {
        var UserService = function() {
            this.user=new User();
        };

        UserService.prototype.getUsersList=function(){
        	var req = {
                    params:{

                    },
                    method: "GET",
                    url: SERVERPATH.API + 'users'
                };
               return ApiService.httpRequest(req)
        }

        return new UserService();
    }]);
});