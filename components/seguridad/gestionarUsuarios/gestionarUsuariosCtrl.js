app.controller("gestionarUsuariosCtrl", [
  "$scope",
  "$window",
  "$http",
  "settings",
  "$cookies",
  "Fact",
  function ($scope, $window, $http, settings, $cookies, Fact) {
    $scope.userGest  = Fact

    $scope.user = {
      Usuario: "",
      Email: "",
      Nombre: "",
      Apellido: "",
      Grupos: [],
      Habilitado: true
    };

    $scope.ConsultarUsuarios = function () {
      $scope.users = null
      $http({
        method: "GET",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarUsuarios/ConsultarUsuarios",
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          $scope.users = response.data;
          console.log('user gestionar', $scope.users)
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar consultar usuarios",
          });
        }
      );
    };

    $scope.ConsultarUsuarios();

    

    $scope.EliminarUsuario = function (user) {
      console.log("user", user);
      var request = {
        habilitado: true,
        nombreUsuario: user.nombreUsuario,
        email: user.email,
        nombreApellido: user.nombreApellido,
        activo: true,
      };

      console.log("request", request);

      $http({
        method: "DELETE",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarUsuarios/EliminarUsuario",
        data: request,
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          console.log(response);
          if (response.data) {
            $scope.ConsultarUsuarios();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Usuario eliminado",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "warning",
              title: "El usuario no existe",
            });
          }
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar eliminar usuario",
          });
        }
      );
    };

    $scope.EditarUsuario = function (user) {
        $scope.userGest.User = user;
    };

    $scope.FiltrarUsuarios = function () {
      var request = {};

      $http({
        method: "GET",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarUsuarios/FiltrarUsuario",
        data: request,
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          console.log(response);
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar filtrar usuario",
          });
        }
      );
    };

    $scope.ResetearPassword = function (user) {
      console.log(user.email);
      $http({
        method: "GET",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarUsuarios/ResetearPassword",
        params: {usuarioMail: user.email},
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          console.log(response);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Contraseña reseteada",
            text: 'Se envió un correo con la nueva contraseña',
            showConfirmButton: true,
          });
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar resetear clave",
          });
        }
      );
    };
  },
]);
