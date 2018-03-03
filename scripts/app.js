var app = angular.module("ngClassifieds", ["ngRoute"]);
// see the components/classifieds.crt.js
//routing
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        title : "Home",
        templateUrl : "views/main.html"
      })
    .when("/about", {
      title : "About",
      templateUrl : "views/about.html"
    })
    .when("/contact", {
      title : "Contact",
      templateUrl : "views/contact.html"
    });
  });

  //title setting
  app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.$$route.title;
    });
  }]);

  //custom directive
app.directive("helloWorld", function(){
    return{
        template: "<h1>{{name.first}}</h1>"
    };
});