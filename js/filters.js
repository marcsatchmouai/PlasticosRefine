app.filter('estado', [function(){
    return function(bool){
        if (bool) {
            return "Habilitado"
        } else {
            return "Deshabilitado"
        }
    }
}]);