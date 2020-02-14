//declared an application fastFoodApp module using angular.module function
//ngRoute module helps application to become a Single Page Application
//ngResource used to handle the RESTful API
 window.fastFoodApp = angular.module("FastFoodApp", ["ngResource", "ngRoute"]);

//declared a controller fastFoodController module using fastFoodApp.controller function
fastFoodApp.controller("fastFoodController", function ($scope, $location, $http) {
  //$scope.headerSrc contains header html of the web page
  $scope.headerSrc = "pages/header.html";
  //$scope.foodItems contains fast food items comes from fastFoodBasket service
  //$scope.foodItems = fastFoodBasket;
  
  $http.get('http://localhost:8080/items/').
  success(function(data, status, headers, config) {
      $scope.foodItems = data.blogs;
  });
  
  //initiate null to the selected fast food information
  $scope.selectedFoodItem = null;

  //find the selected food item in the fast food collections through given fast food id
  $scope.getFoodById = function (id) {
    //declare fastFoodIems variable and store food information from $scope.foodItems
    var fastFoodIems = $scope.foodItems;
    for (var i = 0; i < fastFoodIems.length; i++) {
      //decclare fastFoodIem variable and store perticular food item using loop
      var fastFoodIem = $scope.foodItems[i];
      //check the perticular item's id is equal to the given id
      if (fastFoodIem.ItemID == id) {
        //if it is equal store that food item into selectedFoodItem variable
        $scope.selectedFoodItem = fastFoodIem;
      }
    }
  };

  //create the function to back event
  $scope.back = function () {
    window.history.back();
  };

  //create the function to get count
  $scope.getCount = function (n) {
    return new Array(n);
  };

  //create the function to isActive
  $scope.isActive = function (route) {
    return route === $location.path();
  };

  //create the function to isActivePath
  $scope.isActivePath = function (route) {
    return ($location.path()).indexOf(route) >= 0;
  };
 
});

//declared a controller foodDetailController module using fastFoodApp.controller function
fastFoodApp.controller("foodDetailController", function ($scope, $routeParams) {
  //find the food through id of the food
  $scope.getFoodById($routeParams.id);
});
