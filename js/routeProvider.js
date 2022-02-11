app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/components/default/default.html'
        })

        .when('/gestionarUsuarios', {
            templateUrl: '/components/seguridad/gestionarUsuarios/gestionarUsuarios.html',
            controller: 'gestionarUsuariosCtrl'
        })
        .when('/registrarUsuarios', {
            templateUrl: '/components/seguridad/gestionarUsuarios/registrarUsuario.html',
            controller: 'registrarUsuarioCtrl'
        })
        .when("/editarUsuario", {
            templateUrl: 'components/seguridad/gestionarUsuarios/editarUsuario.html',
            controller: 'editarUsuarioCtrl'
        })
        .when("/asignarGrupos", {
            templateUrl: 'components/seguridad/gestionarUsuarios/asignarGrupos.html',
            controller: 'asignarGruposCtrl'
        })

        .when('/gestionarGrupos', {
            templateUrl: '/components/seguridad/gestionarGrupos/gestionarGrupos.html',
            controller: 'gestionarGruposCtrl'
        })
        .when('/agregarGrupo', {
            templateUrl: '/components/seguridad/gestionarGrupos/agregarGrupo.html',
            controller: 'asignarGruposCtrl'
        })
        .when("/editarGrupo", {
            templateUrl: 'components/seguridad/gestionarGrupos/editarGrupo.html',
            controller: 'editarGrupoCtrl'
        })
        .when("/asignarAcciones", {
            templateUrl: 'components/seguridad/gestionarGrupos/asignarAcciones.html',
            controller: 'asignarAccionesCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);