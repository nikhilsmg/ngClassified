(function() {

    "use strict";

    var app =angular.module("ngClassifieds");        //here [] not to use bcz used in app.js so we dont want to create module again
    
    app.controller("classifiedsController", function($scope){
        
        $scope.classifieds = [
            {
              "id":"1",
              "title":"RS200 Yellow",
              "description":"2013 rainbow trailer 20 feet x 82 inch deck area, two 5,000 lb axels, electric brakes, two pull out ramps, break away box, spare tire.",
              "price":6000,
              "posted":"2015-10-24",
              "contact": {
                "name":"John Doe",
                "phone":"(555) 555-5555",
                "email":"johndoe@gmail.com"
              },
              "categories":[
                "Vehicles",
                "Parts and Accessories"
              ],
              "image": "https://www.bajajauto.com/bajaj-images/pulsar/plr-glr-zm7.jpg",
              "views":213
            },
            {
              "id":"2",
              "title":"RS200 Red",
              "description":"Red woman's Canada Goose Montebello jacket. It was used for two seasons. This jacket retails for $745. The jacket has been professionally cleaned since it was last worn by anyone.",
              "price": 500,
              "posted": "2015-10-28",
              "contact": {
                "name": "Jane Doe",
                "phone": "(555) 555-5555",
                "email": "janedoe@gmail.com"
              },
              "categories": [
                "Clothing"
              ],
              "image":"https://www.bajajauto.com/bajaj-images/pulsar/plr-glr-zm6.jpg",
              "views": 422
            },
            {
              "id":"3",
              "title":"RS200 Red on Road",
              "description":"Good condition.",
              "price":50,
              "posted":"2015-10-27",
              "contact": {
                "name":"Jane Doe",
                "phone":"(555) 555-5555",
                "email":"janedoe@gmail.com"
              },
              "categories":[
                "Furniture"
              ],
              "image":"http://www.topgear.com/india/images/stories/articles/512x288/2015Apr07233951.jpg",
              "views":23
            },
            {
              "id":"4",
              "title":"RS200 Blue",
              "description":"Brown leather sofa for sale.  Good condition but small tear on one cushion.",
              "price":250,
              "posted":"2015-11-01",
              "contact": {
                "name":"John Doe",
                "phone":"(555) 555-5555",
                "email":"johndoe@gmail.com"
              },
              "categories":[
                "Furniture"
              ],
              "image":"https://media.zigcdn.com/media/content/2017/Feb/img_3562_720x540.jpg",
              "views":77
            },
            {
              "id":"5",
              "title":"RS200 White",
              "description":"2013 MacBook Air. Great condition, but a few scratches.",
              "price":1150,
              "posted":"2015-11-02",
              "contact": {
                "name":"John Doe",
                "phone":"(555) 555-5555",
                "email":"johndoe@gmail.com"
              },
              "categories":[
                "Electronics",
                "Computer Parts and Accessories"
              ],
              "description":"Battery blanket and block heater installed. Winter tires, good tread left are on the car currently. Car comes with 4 summer tires with also good treads left. Hydraulic power steering fluid line installed so this won't break on you in the cold Yellowknife winters! Synthetic oil used, good for 1000+ more KMs. AC/Sunroof/power doors/steering, CD player/radio. Red accented dash and upolstry.",
              "image":"https://i.ndtvimg.com/i/2018-02/bajaj-pulsar-rs200-racing-red_827x510_81517577812.jpg",
              "views":889
            },
            {
              "id":"6",
              "title":"Bike Lovely",
              "description":"Battery blanket and block heater installed. Winter tires, good tread left are on the car currently. Car comes with 4 summer tires with also good treads left. Hydraulic power steering fluid line installed so this won't break on you in the cold Yellowknife winters! Synthetic oil used, good for 1000+ more KMs. AC/Sunroof/power doors/steering, CD player/radio. Red accented dash and upolstry.",
              "price":4800,
              "posted":"2015-11-03",
              "contact": {
                "name":"John Doe",
                "phone":"(555) 555-5555",
                "email":"johndoe@gmail.com"
              },
              "categories":[
                "Vehicles",
                "Cars"
              ],
              "image":"https://new-img.patrika.com/upload/images/2015/11/28/Bajaj-Pulsar-RS-200-White-color-1448706517_835x547.jpg",
              "views":423
            }
          ];
    });
})();