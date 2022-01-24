var app = angular.module('frecicarApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/components/default/default.html'
        })

        .when('/gestionarUsuarios', {
            templateUrl: '/components/login/gestionarUsuarios/gestionarUsuarios.html'
            
        })
        .when('/registrarUsuarios', {
            templateUrl: '/components/login/gestionarUsuarios/registrarUsuario.html'
            
        })
        .when("/editarUsuario", {
            templateUrl: 'components/login/gestionarUsuarios/editarUsuario.html'
            //controller: 'GestionarOrdenesComprasCtrl'
        })
        .when("/asignarGrupos", {
            templateUrl: 'components/login/gestionarUsuarios/asignarGrupos.html'
            //controller: 'GestionarOrdenesComprasCtrl'
        })

        .when('/gestionarGrupos', {
            templateUrl: '/components/login/gestionarGrupos/gestionarGrupos.html'
            
        })
        .when('/agregarGrupo', {
            templateUrl: '/components/login/gestionarGrupos/agregarGrupo.html'
            
        })
        .when("/editarGrupo", {
            templateUrl: 'components/login/gestionarGrupos/editarGrupo.html'
            //controller: 'GestionarOrdenesComprasCtrl'
        })
        .when("/asignarAcciones", {
            templateUrl: 'components/login/gestionarGrupos/asignarAcciones.html'
            //controller: 'GestionarOrdenesComprasCtrl'
        })
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