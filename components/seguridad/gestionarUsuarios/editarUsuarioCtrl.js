app.controller("editarUsuarioCtrl", [
  "$scope",
  "$window",
  "$http",
  "settings",
  "$cookies",
  "Fact",
  "GruposFact",
  function ($scope, $window, $http, settings, $cookies, Fact, GruposFact) {
    
    $scope.grupos = GruposFact.grupos;
    
    $scope.userEdit = Fact;

    $scope.user = {
      Usuario: "",
      Email: "",
      Nombre: "",
      Apellido: "",
      Grupo: {},
      Habilitado: true
    };

    $scope.request = {
      grupos: [],
      habilitado: true,
      nombreUsuario: "",
      email: "",
      nombreApellido: "",
      activo: false,
    }
    
    $scope.BuscarUsuario = function () {
      console.log('$scope.userEdit.User.nombreUsuario', $scope.userEdit.User.nombreUsuario);
      $http({
        method: "GET",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarUsuarios/BuscarUsuario",
        params: {nombreUsuario: $scope.userEdit.User.nombreUsuario},
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          console.log(response);
          $scope.user = {Grupo: response.data.grupos[0]};
          $scope.user.Usuario = response.data.nombreUsuario;
          $scope.user.Email = response.data.email;
          $scope.user.Nombre = response.data.nombreApellido.split(" ")[0];
          $scope.user.Apellido = response.data.nombreApellido.split(" ")[1];
          $scope.user.Habilitado = response.data.habilitado;
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar buscar usuario",
          });
        }
      );
    };
    $scope.BuscarUsuario();

    $scope.ModificarUsuario = function () {
      console.log('user',  $scope.user);
      var request = {
        grupos: [$scope.user.Grupo],
        habilitado: $scope.user.Habilitado,
        nombreUsuario: $scope.user.Usuario,
        email: $scope.user.Email,
        nombreApellido: $scope.user.Nombre + " " + $scope.user.Apellido,
        activo: false,
      };
      console.log(request);
      $http({
        method: "PUT",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarUsuarios/ModificarUsuario",
        data: request,
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          console.log(response);
          if (response.data == true) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Usuario modificado",
              showConfirmButton: false,
              timer: 2000,
            });
            $window.location.href = '#!gestionarUsuarios';
          } 
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar modificar usuario",
          });
        }
      );
    };
  },
]);
