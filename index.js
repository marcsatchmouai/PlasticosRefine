var app = angular.module('loginApp', []);+

app.controller('loginCtrl', function($scope, $window){
    $scope.Loguear = function() {
        console.log("entro");
        $window.location.href = 'home.html';
        // if($scope.user == 'admin' && $scope.password == 'admin') {
        //     console.log("entro al if submit")
        //     $window.location.href = 'home.html';
        // } else {
        //     alert('Wrong Stuff');
        // }
    }
});