//$routeProvider is used to configure different routes in application
//templateUrl is used to locate the html file
//controller is used to identify the control of the specific URL
//redirectTo is used to redirect the given URL
//$locationProvider is used to hide the # symbol in URL
fastFoodApp.config(function ($routeProvider,$locationProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "pages/home.html",
      controller: "fastFoodController"
    })
    .when("/foodItem/:id", {
      templateUrl: "pages/ItemInfo.html",
      controller: "foodDetailController"
    })
    .otherwise({
        redirectTo: "/home"
    })
    $locationProvider.html5Mode(true);
});