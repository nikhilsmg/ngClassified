var app = angular.module("ngClassifieds", []);

app.directive("helloWorld", function(){
    return{
        template: "<h1>{{name.first}}</h1>"
    };
});