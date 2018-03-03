(function() {

    "use strict";

    var app =angular.module("ngClassifieds");        //here [] not to use bcz used in app.js so we dont want to create module again
    
    app.controller("classifiedsController", function($scope, $http){
        
        //get json data
        $http.get('data/classifieds.json').then(function(classifieddata){
            $scope.classifieds = classifieddata.data;
        });

        //to push contact details to all added new item
        var contact={
            name: "Nikhil S",
            phone: "999-9999-999",
            email: "nikhilsshimogga@gmail.com"
        };

        //to add new item
        $scope.saveClassified = function(classifiedd){
            if(classifiedd.title!=null && classifiedd.image!=null)
            {
                classifiedd.contact=contact;
                $scope.classifieds.push(classifiedd);
                $scope.classifiedd = {};                   //to empty the fields
                var message="item added successfully";
                snackbarFunction(message);              //pass the message
                closeNav();
            }
        };

        // to edit item
        $scope.editclassified = function(classified){   //classified is the current edditing object
            $scope.showEdit=true;
            openNav();
            $scope.classifiedd = classified;        //to get the edited data in the fields see ng-model in the form
        }

        //after the saveEdit button clicked
        $scope.saveEdited = function(){
            $scope.showEdit=false;
            $scope.classifiedd = {};
            var message="item edited successfully";
            snackbarFunction(message);                      //pass the message
            closeNav();

        }

        //to delete item
        $scope.deleteclassified = function(classified){
            var index = $scope.classifieds.indexOf(classified);
            if(confirm("Are you sure want to delete?")){
                $scope.classifieds.splice(index,1);
                var message="item deteted..!!";
                snackbarFunction(message);              //pass the message
            }
        }
        
    });

    
})();