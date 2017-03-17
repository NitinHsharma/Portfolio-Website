//  var app = angular.module("main", [])

//  //  .config(['$routeProvider', function($routeProvider) {
//  //      $routeProvider.
//  //      when('/index.html', {
//  //          templateUrl: 'main.html',
//  //          controller: 'mainclt'
//  //      });
//  //  }])

//  .controller('mainclt', function($scope) {
//      $scope.nitin = 'nitin';
//  });



var app = angular.module("MAINAPP", [])
    .controller('myController', function($scope) {
        $scope.fname = "Nitin";
    });