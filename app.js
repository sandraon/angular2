var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
  // route for the home page
  .when("/", {
    templateUrl : "index.html"
  })
  // route for the todo page
  .when("/todo", {
    templateUrl : "todo.html"
  })
  //route for the examples page
  .when("/example", {
    templateUrl : "example.html"
  })
  // route for the resources page
  .when("/resources", {
    templateUrl : "resources.html"
  })
  // route for the game page
  .when("/game", {
    templateUrl : "game.html"
  })
  // route for the feedback page
  .when("/feedback", {
    templateUrl : "feedback.html"
  })
});