1) Displaying the JSON data in main.html
2) Contact & Display Buttons
3) Admin & Close Buttons
4) In Admin >> Edit & Delete Buttons
5) Add Item
6) Edit item and delete
7) Routing to about and contact page

1) npm init
2) npm install "angular": "^1.6.9",
                "angular-route": "^1.6.9",
                "bootstrap": "^4.0.0",
                "bootstrap3": "^3.3.5",
                "font-awesome": "^4.7.0",
                "jquery": "^3.3.1"
3) npm install http-server -g       to install server globaly
4) Create JSON file: data/classifieds.json
5) create app.js : scripts/app.js : create angular.module
6) create classifieds.ctr.js : components/classifieds.ctr.js : get the json file and refer it to reference variable
7) create index.html : include all the css, js files, header.html. ng-view to router
8) create main.html : form display the json content. and buttons
    add sideNav and corresponding snackBar messages
9) configure the add, edit, saveEdit, delete in classifieds.ctr.js

10) run by entering : http-server and open: http://localhost:8080/