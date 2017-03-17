var app = angular.module('main', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when("/main", {
      templateUrl: 'main.html',
      controller: 'indexContain'
    })
    .when("/project", {
      templateUrl: 'project.html',
      controller: 'projectCltr'
    })
      .when("/about", {
      templateUrl: 'about.html',
      controller: 'indexContain'
    })
    .when("/contact", {
      templateUrl: 'contact.html',
      controller: 'projectCltr'
    })
    .otherwise("/main",{
      templateUrl: 'main.html',
      controller: 'indexContain'
    })
}]);


app.controller('indexContain',['$scope','$http', function($scope, $http) {
  $http.get('information.json').then(function(response){
    console.log(response.data.main.content);
    $scope.title = response.data.title;
    $scope.maintitle = response.data.maintitle;
    $scope.name =response.data.name;
    $scope.shortline = response.data.main.shortline;
    $scope.mainline = response.data.main.mainline;
    $scope.mainline1 = response.data.main.mainline1;
    $scope.index = response.data.main.content;
  });

}]);

app.controller('projectCltr', function($scope) {
  console.log('P working');
  $scope.Heading1 = '******';
  $scope.Heading1 = 'Technologies';
  $scope.Heading1 = 'Certifications';

});