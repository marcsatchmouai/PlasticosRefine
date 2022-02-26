app.controller("agregarGrupoCtrl", [
  "$scope",
  "$window",
  "$http",
  "settings",
  "$cookies",
  "GruposFact",
  "consultarGruposService",
  function ($scope, $window, $http, settings, $cookies, GruposFact, consultarGruposService) {
    $scope.consultarGruposService = function() {
      consultarGruposService.getGrupos()
    }
    
    

    $scope.AgregarGrupo = function () {
      if ($scope.group.Nombre.indexOf(" ") == -1) {
        var request = {
          nombre: $scope.group.Nombre,
          descripcion: $scope.group.Descripcion,
        };
        $http({
          method: "POST",
          url:
            settings.webApiBaseUrl +
            "api/Seguridad/GestionarGrupos/AgregarGrupo",
          data: request,
          headers: settings.headers,
        }).then(
          function successCallback(response) {
            if (response.data == true) {
              $scope.consultarGruposService()
              //$scope.groups = GruposFact.grupos;
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Grupo agregado",
                showConfirmButton: false,
                timer: 2000,
              });
              $window.location.href = "#!gestionarGrupos";
            } else {
              Swal.fire({
                icon: "warning",
                title: "El grupo ya existe",
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
          title: "No esta permitido dejar espacios en el nombre del grupo",
        });
      }
    };
  },
]);
