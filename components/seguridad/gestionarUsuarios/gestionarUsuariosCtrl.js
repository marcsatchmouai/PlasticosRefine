app.controller('gestionarUsuariosCtrl', ['$scope', '$window', '$http', 'settings', '$cookies', function($scope, $window, $http, settings, $cookies){

    $scope.ConsultarUsuarios = function() {

        $http({
            method: 'GET',
            url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/ConsultarUsuario',
            headers: settings.headers
        }).then(function successCallback(response) {
            $scope.users = response.data

        }, function errorCallback(response) {
            Swal.fire({
                icon: 'error',
                title: 'Error al intentar consultar usuarios',
            })
        });
    }

    $scope.ConsultarUsuarios();

    $scope.BuscarUsuario = function() {

        var request={ 
            habilitado: true, 
            nombreUsuario: $scope.user.Usuario,
            email: $scope.user.Email,
            nombreApellido: $scope.user.Nombre + ' ' + $scope.user.Apellido,
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
            Swal.fire({
                icon: 'error',
                title: 'Error al intentar buscar usuario',
            })
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
            Swal.fire({
                icon: 'error',
                title: 'Error al intentar consultar grupos',
            })
        });
    }

    $scope.EliminarUsuario = function(user) {
        console.log('entro al eliminar usuario')
        var request={ 
            habilitado: true, 
            nombreUsuario: user.Usuario,
            email: user.Email,
            nombreApellido: user.Nombre + ' ' + user.Apellido,
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
            Swal.fire({
                icon: 'error',
                title: 'Error al intentar eliminar usuario',
            })
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
            Swal.fire({
                icon: 'error',
                title: 'Error al intentar filtrar usuario',
            })
        });
    }

    $scope.ModificarUsuario = function() {

        var request={ 
            habilitado: true, 
            nombreUsuario: $scope.user.Usuario,
            email: $scope.user.Email,
            nombreApellido: $scope.user.Nombre + ' ' + $scope.user.Apellido,
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
            Swal.fire({
                icon: 'error',
                title: 'Error al intentar modificar usuario',
            })
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
            Swal.fire({
                icon: 'error',
                title: 'Error al intentar resetear clave',
            })
        });
    }
}]);