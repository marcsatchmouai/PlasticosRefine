app.controller("gestionarPerfilesCtrl", [
  "$scope",
  "$window",
  "$http",
  "settings",
  "$cookies",
  function ($scope, $window, $http, settings, $cookies) {
    

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
              //console.log("response", response.data);
            if (response.data.length > 0) {
              $scope.perfiles = response.data;
              //console.log("perfiles", $scope.perfiles);
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

      // $scope.perfiles = [
      //   {
      //       formulario: [
      //           {
      //               permisos: [],
      //               descripcion: "",
      //               nombre: ""
      //           }
      //       ],
      //       grupo: {
      //           descripcion: "",
      //           nombre: ""
      //       }
      //   }
      // ]
      $scope.perfiles = [
        {
            formulario: [],
            grupo: {}
        }
      ]
      
      $scope.perfiles
      console.log("perfiles", $scope.perfiles);
      $scope.formulariosSelected = [];
      $scope.permisosSelected = [];

      $scope.toggleFormulario = function(groupIndex, formIndex) {
        console.log('groupIndex', groupIndex, 'formIndex',formIndex)
        $scope.formId = groupIndex + '-' + formIndex
        $scope.formularios[$scope.formId].checked = !$scope.formularios[$scope.formId].checked;
        // if (!$scope.formularios[index].checked) {
        //   $scope.selectAll = false;
        // }
        console.log('formularios',$scope.formularios)
      }

      $scope.togglePermiso = function(groupIndex, formIndex, passIndex) {
        console.log('groupIndex', groupIndex, 'formIndex', formIndex, 'passIndex', passIndex )
        $scope.passId = groupIndex + '-' + formIndex + '-' + passIndex
        console.log('$scope.passId', $scope.passId)
        console.log('permisosSelected',$scope.permisosSelected)
        $scope.permisos[$scope.passId].checked = !$scope.permisos[$scope.passId].checked;
        // if (!$scope.permisos[index].checked) {
        //   $scope.selectAll = false;
        // }
        console.log('permisosSelected',$scope.permisosSelected)
      }
  },
]);
