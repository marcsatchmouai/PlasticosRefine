app.service("consultarGruposService", [
  "$http",
  "settings",
  "GruposFact",
  function ($http, settings, GruposFact) {
    
    this.getGrupos = function () {
      $http({
        method: "GET",
        url:
          settings.webApiBaseUrl +
          "api/Seguridad/GestionarUsuarios/ConsultarGrupos",
        headers: settings.headers,
      }).then(
        function successCallback(response) {
          GruposFact.grupos = response.data;
        },
        function errorCallback(response) {
          Swal.fire({
            icon: "error",
            title: "Error al intentar consultar usuarios",
          });
        }
      );
    };
  },
]);
