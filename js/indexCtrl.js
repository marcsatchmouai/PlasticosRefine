
app.controller('appSecurityCtrl', ['$scope', '$window', '$http', 'settings', '$cookies', function($scope, $window, $http, settings, $cookies){
    $cookies.remove('userLogged')
    $scope.IniciarSesion = function() {
        //marcsatchmo
        //marcsatchmo@gmail.com
        //Marc Satchmo
        //VjwtmqAA
        var request={ 
            Usuario: $scope.user, 
            clave: $scope.password 
        };

        $http({
            method: 'POST',
            url: settings.webApiBaseUrl + 'api/Seguridad/IniciarSesion',
            data: request,
            headers: settings.headers
        }).then(function successCallback(response) {
            console.log(response)
            switch (response.data) {
                case 1:
                    //PasswordErroneo
                    Swal.fire({
                        icon: 'warning',
                        title: 'Password Erroneo',
                    })
                    break;
                case 2:
                    //UsuarioYaLogueado
                    Swal.fire({
                        icon: 'warning',
                        title: 'Usuario ya logueado',
                    })
                    break;
                case 3:
                    //UsuarioNoHabilitado
                    Swal.fire({
                        icon: 'warning',
                        title: 'Usuario no habilitado',
                    })
                    break;
                case 4:
                    //UsuarioDesconocido
                    Swal.fire({
                        icon: 'warning',
                        title: 'Usuario desconocido',
                    })
                    break; 
                case 5:
                    //UsuarioSinGrupo
                    Swal.fire({
                        icon: 'warning',
                        title: 'Usuario sin grupo',
                    })
                    break;            
                default:
                    if(response.data) {
                        $cookies.putObject('userLogged', response.data);
                        $window.location.href = 'home.html';
                    } 
                    break;
            }
        }, function errorCallback(response) {
            Swal.fire({
                icon: 'error',
                title: 'Error al intentar loguearse',
            })
        });
    }
}]);