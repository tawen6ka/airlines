(function (app) {
    var flightController = function ($scope) {
        // $scope.number = 2 + 2;

        $scope.selectFlight = function (flight) {
           // var newFlag = !flight.approved;

            for (var f=0; f < $scope.flights.length; f++) {
                $scope.flights[f].approved = false;
            }
            flight.approved = !flight.approved;

        };


        $scope.flights =
        [
            {
                airline: "United",
                flightNumber: 207,
                startTime: "12:00",
                endTime: "14:00",
                totalDuration: 2,
                price: 500,
                date: "12/1/2016",
                cities: ["ORD", "LAS"],
                approved:false
            },
            {
                airline: "United",
                flightNumber: 207,
                startTime: "12:00",
                endTime: "14:00",
                totalDuration: 2,
                price: 500,
                date: "12/1/2016",
                cities: ["ORD", "LAS"],
                approved: false
            }
        ];
    };
    //flightController.$inject = ["$scope"];

    app.controller("flightController", ["$scope",  flightController]);
}(angular.module("airlineApp")));