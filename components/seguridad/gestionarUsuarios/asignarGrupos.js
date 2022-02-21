$scope.ConsultarGrupos = function () {
    $http({
      method: "GET",
      url:
        settings.webApiBaseUrl +
        "api/Seguridad/GestionarUsuarios/ConsultarGrupos",
      headers: settings.headers,
    }).then(
      function successCallback(response) {
        console.log(response);
      },
      function errorCallback(response) {
        alert("Error al intentar agregar usuario");
      }
    );
  };