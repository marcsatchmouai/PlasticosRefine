var app = angular.module('prAng', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        // .when('/', {
        //     templateUrl: '/views/pages/dashboard.html',
        //     controller: ''
        // })
        .when("/GestionarOrdenesCompras", {
            templateUrl: "views/pages/GestionarOrdenesCompras.html"
            //controller: 'GestionarOrdenesComprasCtrl'
        })
        // .otherwise({
        //     //redirectTo: '/xxxx'
        // });
}]);

app.controller('GestionarOrdenesComprasCtrl', function($scope){

});