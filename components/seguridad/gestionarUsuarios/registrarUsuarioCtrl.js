app.controller('registrarUsuarioCtrl', ['$scope', '$window', '$http', 'settings', '$cookies', function($scope, $window, $http, settings, $cookies){

    $scope.user = {};
 
    $scope.reset = function(form) {
        $scope.user = {};
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
    };

    $scope.reset();
    
    $scope.AgregarUsuario = function() {
        if($scope.user.Password ==  $scope.user.PasswordRepeat) {
            var request={ 
                habilitado: true, 
                nombreUsuario: $scope.user.Usuario,
                email: $scope.user.Email,
                nombreApellido: $scope.user.Nombre + ' ' + $scope.user.Apellido,
                activo: true 
            };
            

            $http({
                method: 'POST',
                url: settings.webApiBaseUrl + 'api/Seguridad/GestionarUsuarios/AgregarUsuario',
                data: request,
                headers: settings.headers
            }).then(function successCallback(response) {
                if(response.data == true){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Usuario registrado',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }  else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'El usuario ya existe',
                    })
                }
                
            }, function errorCallback(response) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al intentar agregar usuario',
                })
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Las contraseñas no coinciden',
            })
        }
        
    }

    
}]);