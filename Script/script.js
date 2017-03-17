var app = angular.module('main', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/main", {
            templateUrl: 'main.html',
            controller: 'mainCltr'
        })
        .when("/project", {
            templateUrl: 'main.html',
            controller: 'projectCltr'
        })
        .when("/about", {
            templateUrl: 'main.html',
            controller: 'aboutClt'
        })
        .when("/contact", {
            templateUrl: 'main.html',
            controller: 'contactCltr'
        })
        .otherwise("/main", {
            templateUrl: 'main.html',
            controller: 'mainCltr'
        })
}]);


app.controller('mainCltr', ['$scope', '$http', function($scope, $http) {
    $http.get('information.json').then(function(response) {
        $scope.title = response.data.title;
        $scope.maintitle = response.data.maintitle;
        $scope.name = response.data.name;
        $scope.shortline = response.data.main.shortline;
        $scope.mainline = response.data.main.mainline;
        $scope.mainline1 = response.data.main.mainline1;
        $scope.index = response.data.main.content;
    });

}]);

app.controller('projectCltr', ['$scope', '$http', function($scope, $http) {
    $http.get('information.json').then(function(response) {
        $scope.title = response.data.title;
        $scope.maintitle = response.data.maintitle;
        $scope.name = response.data.name;
        $scope.shortline = response.data.project.shortline;
        $scope.mainline = response.data.project.mainline;
        $scope.mainline1 = response.data.project.mainline1;
        $scope.index = response.data.project.content;
    })
}]);

app.controller('aboutClt', ['$scope', '$http', function($scope, $http) {
    $http.get('information.json').then(function(response) {
        $scope.title = response.data.title;
        $scope.maintitle = response.data.maintitle;
        $scope.name = response.data.name;
        $scope.shortline = response.data.about.shortline;
        $scope.mainline = response.data.about.mainline;
        $scope.mainline1 = response.data.about.mainline1;
        $scope.index = response.data.about.content;
    })
}]);

app.controller('contactCltr', ['$scope', '$http', function($scope, $http) {
    $http.get('information.json').then(function(response) {
        $scope.title = response.data.title;
        $scope.maintitle = response.data.maintitle;
        $scope.name = response.data.name;
        $scope.shortline = response.data.contact.shortline;
        $scope.mainline = response.data.contact.mainline;
        $scope.mainline1 = response.data.contact.mainline1;
        $scope.index = response.data.contact.content;
    })
}]);