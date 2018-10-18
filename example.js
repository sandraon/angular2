  // Examples //
var app = angular.module('exampleApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/example1', {
      templateUrl: "example.html",
      controller: "example1Ctrl"
    })
    .when('/example2', {
      templateUrl: "example.html",
      controller: "example2Ctrl"
    })
    .when('/example3', {
      templateUrl: "example.html",
      controller: "example3Ctrl"
    })
    .when('/example4', {
      templateUrl: "example.html",
      controller: "example4Ctrl"
    })
    .when('/example5', {
      templateUrl: "example.html",
      controller: "example5Ctrl"
    })
});

app.controller("example1Ctrl", function($scope, $route) {
  $scope.example = {
    heading: 'Navigation Menu',
    desc: 'This example shows how to highlight the selected entry with Angular directives.',
    picture: 'example1.png',
    codehtml: 'code1html.png',
    morecode: 'https://tutorialzine.com/2013/08/learn-angularjs-5-examples'    
  }
});

app.controller("example2Ctrl", function($scope, $route) {
  $scope.example = {
    heading: 'Inline Editor',
    desc: 'This example shows how to create a simple inline editor with Angular controller.',
    picture: 'example2.png',
    codehtml: 'code2html.png',
    morecode: 'https://tutorialzine.com/2013/08/learn-angularjs-5-examples'
  }
});

app.controller("example3Ctrl", function($scope, $route) {
  $scope.example = {
    heading: 'Order Form',
    desc: 'This example shows how to create an order form with a total price updated in real time, using Angular filters.',
    picture: 'example3.png',
    codehtml: 'code3html.png',
    morecode: 'https://tutorialzine.com/2013/08/learn-angularjs-5-examples'
  }
});

app.controller("example4Ctrl", function($scope, $route) {
  $scope.example = {
    heading: 'Instant Search',
    desc: 'This example will allow users to filter a list of items by typing into a text field.',
    picture: 'example4.png',
    codehtml: 'code4html.png',
    morecode: 'https://tutorialzine.com/2013/08/learn-angularjs-5-examples'
  }
});

app.controller("example5Ctrl", function($scope, $route) {
  $scope.example = {
    heading: 'Switchable Grid',
    desc: 'This example shows how to use switching between different layout modes (grid or list) with a click of a button.',
    picture: 'example5.png',
    codehtml: 'code5html.png',
    morecode: 'https://tutorialzine.com/2013/08/learn-angularjs-5-examples'
  }
});