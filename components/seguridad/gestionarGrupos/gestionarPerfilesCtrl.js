app.controller("gestionarPerfilesCtrl", [
  "$scope",
  "$window",
  "$http",
  "settings",
  "$cookies",
  "Fact",
  "GruposFact",
  function ($scope, $window, $http, settings, $cookies, Fact, GruposFact) {
    $scope.perfilModel = [
        {
            formularios: [
                {
                    permisos: [],
                    descripcion: "",
                    nombre: ""
                }
            ],
            grupo: {
                descripcion: "",
                nombre: ""
            }
        }
    ]

    $scope.ConsultarFormularios = function () {
      $http({
        method: "GET",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarPerfiles/ConsultarFormularios",
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          if (response.data.length > 0) {
            $scope.formularios = response.data;
            console.log("formularios", $scope.formularios);
          }
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar obtener formularios",
          });
        }
      );
    };
    $scope.ConsultarFormularios();

    $scope.ConsultarGruposSinSuperGroup = function () {
      $http({
        method: "GET",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarPerfiles/ConsultarGruposSinSuperGroup",
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          if (response.data.length > 0) {
            $scope.grupos = response.data;
            console.log("grupos", $scope.grupos);
          }
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar obtener grupos",
          });
        }
      );
    };
    $scope.ConsultarGruposSinSuperGroup();

    $scope.ConsultarPermisos = function () {
      $http({
        method: "GET",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarPerfiles/ConsultarPermisos",
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          if (response.data.length > 0) {
            $scope.permisos = response.data;
            console.log("permisos", $scope.permisos);
          }
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar obtener permisos",
          });
        }
      );
    };
    $scope.ConsultarPermisos();

    $scope.ConsultarPerfiles = function () {
        $http({
          method: "GET",
          url:
            settings.webApiBaseUrl +
            "api/Seguridad/GestionarPerfiles/ConsultarPerfiles",
          headers: settings.headers,
        }).then(
          function successCallback(response) {
              console.log("response", response.data);
            if (response.data.length > 0) {
              $scope.perfiles = response.data;
              console.log("perfiles", $scope.perfiles);
            }
          },
          function errorCallback(response) {
            Swal.fire({
              icon: "error",
              title: "Error al intentar obtener perfiles",
            });
          }
        );
      };
      $scope.ConsultarPerfiles();

      console.log("perfilModel", $scope.perfilModel);
  },
]);
