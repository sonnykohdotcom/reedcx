"use strict";

/* service to populate tabular data */
app.ng.service("tableService", ['$http', function($http) {
    var bigbase = "json/bigTable.json";
    var smallbase = "json/smallTable.json";
    var getBigTable = function() {
        return $http.get(bigbase);
    };
    var getSmallTable = function() {
        return $http.get(smallbase);
    };

    return {
        getBigTable: getBigTable,
        getSmallTable: getSmallTable
    };
}]);
