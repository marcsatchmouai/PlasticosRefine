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
        
        .when('/gestionarGrupos', {
            templateUrl: '/components/seguridad/gestionarGrupos/gestionarGrupos.html',
            controller: 'gestionarGruposCtrl'
        })
        .when('/agregarGrupo', {
            templateUrl: '/components/seguridad/gestionarGrupos/agregarGrupo.html',
            controller: 'agregarGrupoCtrl'
        })
        .when("/editarGrupo", {
            templateUrl: 'components/seguridad/gestionarGrupos/editarGrupo.html',
            controller: 'editarGrupoCtrl'
        })
        
        .when("/gestionarPerfiles", {
            templateUrl: 'components/seguridad/gestionarPerfiles/gestionarPerfiles.html',
            controller: 'gestionarPerfilesCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);