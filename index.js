var appLogin = angular.module('loginApp', [])

appLogin.controller('loginCtrl', ['$scope', '$window', '$http', function($scope, $window, $http){
    $scope.Loguear = function() {
        var request={ 
            usuario: $scope.user, 
            clave: $scope.password 
        };

        var headers = {
            'Access-Control-Allow-Origin': true,
            'Content-Type': 'application/json; charset=utf-8',
            "X-Requested-With": "XMLHttpRequest"
        }
        
        $http({
            method: 'POST',
            url: 'https://localhost:44344/api/CasoDeUsoIniciarAplicacion/IniciarSesion',
            params: request,
            headers: headers
        }).then(function successCallback(response) {
            if(response) {
                console.log("entro al if submit")
                $window.location.href = 'home.html';
            } else {
                alert('Wrong Stuff');
            }
              // when the response is available
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
        });
    }
}]);