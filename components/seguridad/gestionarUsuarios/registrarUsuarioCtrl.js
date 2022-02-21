app.controller("registrarUsuarioCtrl", [
  "$scope",
  "$window",
  "$http",
  "settings",
  "$cookies",
  "GruposFact",
  function ($scope, $window, $http, settings, $cookies, GruposFact) {
    $scope.user = {};

    $scope.reset = function (form) {
      $scope.user = {};
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
    };

    $scope.reset();

    $scope.grupos = GruposFact.grupos;

    $scope.AgregarUsuario = function () {
      if ($scope.user.Usuario.indexOf(" ") == -1) {
        var request = {
          habilitado: true,
          nombreUsuario: $scope.user.Usuario,
          email: $scope.user.Email,
          nombreApellido: $scope.user.Nombre + " " + $scope.user.Apellido,
          grupos: [
            {
              nombre: $scope.user.grupo.nombre,
              descripcion: $scope.user.grupo.descripcion,
            },
          ],
          activo: false,
        };
        $http({
          method: "POST",
          url:
            settings.webApiBaseUrl +
            "api/Seguridad/GestionarUsuarios/AgregarUsuario",
          data: request,
          headers: settings.headers,
        }).then(
          function successCallback(response) {
            if (response.data == true) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Usuario registrado",
                showConfirmButton: false,
                timer: 2000,
              });
              $window.location.href = "#!gestionarUsuarios";
            } else {
              Swal.fire({
                icon: "warning",
                title: "El usuario ya existe",
              });
            }
          },
          function errorCallback(response) {
            Swal.fire({
              icon: "error",
              title: "Error al intentar agregar usuario",
            });
          }
        );
      } else {
        Swal.fire({
          icon: "warning",
          title: "No esta permitido dejar espacios en el nombre de usuario",
        });
      }
    };
  },
]);
