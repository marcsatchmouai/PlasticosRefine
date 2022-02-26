app.controller("gestionarGruposCtrl", [
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
    $scope.consultarGruposService()
    
    $scope.groups = GruposFact.grupos;
    
    $scope.groupSelected = GruposFact.groupSelected
    console.log("$scope.groupSelected", $scope.groupSelected);

    $scope.group = {
      Nombre: "",
      Descripcion: "",
    };

    $scope.EliminarGrupo = function (group) {
      console.log("group", group);

      $http({
        method: "DELETE",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarGrupos/EliminarGrupo",
        data: group,
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          console.log(response);
          if (response.data) {
            
            $scope.consultarGruposService()
            $scope.groups = GruposFact.grupos;
            console.log($scope.groups);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Grupo eliminado",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "warning",
              title: "El grupo no existe",
            });
          }
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar eliminar grupo",
          });
        }
      );
    };

    $scope.EditarGrupo = function (group) {
      console.log("group", group );
      $scope.groupSelected.Nombre = group.nombre
      $scope.groupSelected.Descripcion = group.descripcion
      console.log("$scope.groupSelected", $scope.groupSelected );
    };

    $scope.FiltrarGrupos = function () {
      var request = {};

      $http({
        method: "GET",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarGrupos/FiltrarGrupo",
        data: request,
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          console.log(response);
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar filtrar grupo",
          });
        }
      );
    };
  },
]);
