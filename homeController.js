var app = angular.module('frecicarApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/components/default/default.html'
        })

        // .when('/home', {
        //     templateUrl: './views/components/shared/home.html'
            
        // })
        // .when("/GestionarOrdenesCompras", {
        //     templateUrl: "views/pages/GestionarOrdenesCompras.html"
        //     //controller: 'GestionarOrdenesComprasCtrl'
        // })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('homeCtrl', function($scope){
    console.log('homeCtrl')
    $scope.submit = function() {
        //$location.path('/home');
        // if($scope.user == 'admin' && $scope.password == 'admin') {
        //     console.log("entro al if submit")
        //     $location.path('/home');
        // } else {
        //     alert('Wrong Stuff');
        // }
    }
});