"use strict";

app.ng.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    // Configure existing providers
    $locationProvider.hashPrefix('!');

    $routeProvider.when("/", {
            templateUrl: "partials/body.htm",
            controller: "mainCtrl"
        })
        .otherwise("/404");
}]);

app.ng.controller("mainCtrl", ['$scope', '$window', 'resizeFactory', '$timeout', function($scope, $window, resizeFactory, $timeout) {
    $scope.commodites = [];
    $scope.head1 = "local trends";
    $scope.head2 = "latest trades";
    $scope.head3 = "overview";
    $scope.head4 = "ratios";

    $scope.hamburgerBool = false;

    $scope.$on("mobile-ready", function(evt, _bool) {
        $scope.hamburgerBool = _bool;
    });

    angular.element($window).bind('resize', function() {
        $timeout(resizeFactory.resizeHeight, 101);
    });

    $timeout(resizeFactory.resizeHeight, 201);

}]);
