app.controller("editarGrupoCtrl", [
    "$scope",
    "$window",
    "$http",
    "settings",
    "$cookies",
    "GruposFact",
    function ($scope, $window, $http, settings, $cookies, GruposFact) {
      
      $scope.groupSelected = GruposFact.groupSelected;
      console.log('$scope.groupSelected',  $scope.groupSelected);
      
      $scope.group = {
        Nombre: $scope.groupSelected.Nombre,
        Descripcion: $scope.groupSelected.Descripcion
      }
   
  
    //   $scope.request = {
    //     grupos: [],
    //     habilitado: true,
    //     nombreUsuario: "",
    //     email: "",
    //     nombreApellido: "",
    //     activo: false,
    //   }
      
      // $scope.BuscarGrupo = function () {
      //   console.log('$scope.userEdit.User.nombreUsuario', $scope.userEdit.User.nombreUsuario);
      //   $http({
      //     method: "GET",
      //     url:
      //       settings.webApiBaseUrl +
      //       "api/Seguridad/GestionarGrupos/BuscarGrupo",
      //     params: {nombreUsuario: $scope.userEdit.User.nombreUsuario},
      //     headers: settings.headers,
      //   }).then(
      //     function successCallback(response) {
      //       console.log(response);
      //       $scope.user = {Grupo: response.data.grupos[0]};
      //       $scope.user.Usuario = response.data.nombreUsuario;
           
      //     },
      //     function errorCallback(response) {
      //       Swal.fire({
      //         icon: "error",
      //         title: "Error al intentar buscar usuario",
      //       });
      //     }
      //   );
      // };
      //$scope.BuscarGrupo();
  
      $scope.ModificarGrupo = function () {
        console.log('grupo',  $scope.group);
        var request = {
          nombre: $scope.group.Nombre,
          descripcion: $scope.group.Descripcion
        };
        console.log(request);
        $http({
          method: "PUT",
          url:
            settings.webApiBaseUrl +
            "api/Seguridad/GestionarGrupos/ModificarGrupo",
          data: request,
          headers: settings.headers,
        }).then(
          function successCallback(response) {
            console.log(response);
            if (response.data == true) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Grupo modificado",
                showConfirmButton: false,
                timer: 2000,
              });
              $window.location.href = '#!gestionarGrupos';
            } 
          },
          function errorCallback(response) {
            Swal.fire({
              icon: "error",
              title: "Error al intentar modificar grupo",
            });
          }
        );
      };
    },
  ]);
  