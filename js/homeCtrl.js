app.controller('homeCtrl', ['$scope', '$window', '$http', 'settings', '$cookies', function($scope, $window, $http, settings, $cookies){

    $scope.CerrarSesion = function() {
        var userCookie = $cookies.getObject('userLogged');
        var request={ 
            habilitado: true, 
            nombreUsuario: userCookie.nombreUsuario,
            email: userCookie.email,
            nombreApellido: userCookie.nombreApellido,
            activo: true 
        };

        $http({
            method: 'POST',
            url: settings.webApiBaseUrl + 'api/Seguridad/CerrarSesion/CerrarSesion',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            $cookies.remove('userLogged')
            
        }, function errorCallback(response) {
            Swal.fire({
                icon: 'error',
                title: 'Error al intentar cerrar sesion',
            })
        });
    }


    $scope.BuscarUsuario = function() {

        var request={ 
            habilitado: true, 
            nombreUsuario: $scope.userName,
            email: $scope.email,
            nombreApellido: $scope.nombreApellido,
            activo: true 
        };

        $http({
            method: 'POST',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/BuscarUsuario',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }

    $scope.ConsultarGrupos = function() {

        $http({
            method: 'GET',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/ConsultarGrupos',
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }

    $scope.ConsultarUsuarios = function() {

        $http({
            method: 'GET',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/ConsultarUsuarios',
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }

    $scope.EliminarUsuario = function() {

        var request={ 
            habilitado: true, 
            nombreUsuario: $scope.userName,
            email: $scope.email,
            nombreApellido: $scope.nombreApellido,
            activo: true 
        };

        $http({
            method: 'DELETE',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/EliminarUsuario',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }

    $scope.FiltrarUsuarios = function() {

        var request={ 
             
        };

        $http({
            method: 'GET',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/FiltrarUsuario',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }

    $scope.ModificarUsuario = function() {

        var request={ 
            habilitado: true, 
            nombreUsuario: $scope.userName,
            email: $scope.email,
            nombreApellido: $scope.nombreApellido,
            activo: true 
        };

        $http({
            method: 'PUT',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/ModificarUsuario',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }

    $scope.ResetearPassword = function() {

        var request={ 
             
        };

        $http({
            method: 'GET',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/ResetearPassword',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            
        }, function errorCallback(response) {
            alert('Error al intentar agregar usuario');
        });
    }
}]);