app.controller("homeCtrl", [
  "$scope",
  "$window",
  "$http",
  "settings",
  "$cookies",
  "GruposFact",
  function ($scope, $window, $http, settings, $cookies, GruposFact) {
    
    $scope.Grupos = GruposFact;
    console.log($scope.Grupos)
    
    $scope.CerrarSesion = function () {
      var userCookie = $cookies.getObject("userLogged");
      var request = {
        habilitado: true,
        nombreUsuario: userCookie.nombreUsuario,
        email: userCookie.email,
        nombreApellido: userCookie.nombreApellido,
        activo: true,
      };
      $http({
        method: "POST",
        url: settings.webApiBaseUrl + "api/Seguridad/CerrarSesion/CerrarSesion",
        data: request,
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          $cookies.remove("userLogged");
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar cerrar sesion",
          });
        }
      );
    };

    $scope.ConsultarGrupos = function () {
      $http({
        method: "GET",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarUsuarios/ConsultarGrupos",
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          response.data.map(x => $scope.Grupos.grupos.push(x));
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar consultar usuarios",
          });
        }
      );
    };

    $scope.ConsultarGrupos()
  },
]);
