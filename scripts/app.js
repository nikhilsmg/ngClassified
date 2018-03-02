var app = angular.module("ngClassifieds", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
      })
    .when("/about", {
      templateUrl : "views/about.html"
    })
    .when("/contact", {
      templateUrl : "views/contact.html"
    });
  });

  //custom directive
app.directive("helloWorld", function(){
    return{
        template: "<h1>{{name.first}}</h1>"
    };
});