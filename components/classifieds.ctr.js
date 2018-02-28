(function() {

    "use strict";

    var app =angular.module("ngClassifieds");        //here [] not to use bcz used in app.js so we dont want to create module again
    
    app.controller("classifiedsController", function($scope, $http){
        
        $http.get('data/classifieds.json').then(function(classifieddata){
            $scope.classifieds = classifieddata.data;
        })
        
    });
})();