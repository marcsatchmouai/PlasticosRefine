var appLogin = angular.module('gestionarPerfiles', [])

.constant('settings', {
    webApiBaseUrl: "https://localhost:44374/",
    headers: {
        'Access-Control-Allow-Origin': true,
        'Content-Type': 'application/json; charset=utf-8',
        "X-Requested-With": "XMLHttpRequest"
    }
});

appLogin.controller('gestionarPerfilesCrl', ['$scope', '$window', '$http', 'settings', function($scope, $window, $http, settings){
    $scope.ConsultarFormularios = function() {

        $http({
            method: 'GET',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarPerfiles/ConsultarFormularios',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
          
        }, function errorCallback(response) {
            alert('Error al intentar loguearse');
        });
    }

    $scope.ConsultarGruposSinSuperGroup = function() {

        $http({
            method: 'GET',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarPerfiles/ConsultarGruposSinSuperGroup',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
          
        }, function errorCallback(response) {
            alert('Error al intentar loguearse');
        });
    }

    $scope.ConsultarPerfiles = function() {

        $http({
            method: 'GET',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarPerfiles/ConsultarPerfiles',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
          
        }, function errorCallback(response) {
            alert('Error al intentar loguearse');
        });
    }

    $scope.ConsultarPermisos = function() {

        $http({
            method: 'GET',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarPerfiles/ConsultarPermisos',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
          
        }, function errorCallback(response) {
            alert('Error al intentar loguearse');
        });
    }

    $scope.AgregarPerfil = function() {

        var request={ 
            grupo: {
                nombre: $scope.name, 
                descripcion: $scope.descripcion
            } 
        };

        $http({
            method: 'POST',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/AgregarPerfil',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }

    $scope.BuscarPerfil = function() {

        $http({
            method: 'GET',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarPerfiles/BuscarPerfil',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
          
        }, function errorCallback(response) {
            alert('Error al intentar loguearse');
        });
    }

    $scope.EliminarPerfil = function() {

        var request={ 
            grupo: {
                nombre: $scope.name, 
                descripcion: $scope.descripcion
            } 
        };

        $http({
            method: 'DELETE',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/EliminarPerfil',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }

    $scope.EliminarPerfil = function() {

        var request={ 
            grupo: {
                nombre: $scope.name, 
                descripcion: $scope.descripcion
            } 
        };

        $http({
            method: 'DELETE',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/EliminarPerfil',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }

    $scope.ModificarPerfil = function() {

        var request={ 
            grupo: {
                nombre: $scope.name, 
                descripcion: $scope.descripcion
            } 
        };

        $http({
            method: 'PUT',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/ModificarPerfil',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }
}]);