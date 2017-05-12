"use strict";

/* ============ top nav bar ============== */
app.ng.directive("navDirective", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "partials/nav.htm"
    }
});

/* ============ header logo ============= */
app.ng.directive("logo", function() {
    return {
        restrict: "E",
        replace: true,
        template: '<h1 class="logo">seedcx</h1>'
    }
});

/* ============ hamburger for mobile =========== */
app.ng.directive("hamburgerDirective", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: 'partials/hamburger.htm',
        scope: {
            "bool": "@",
            "hamburgerBool": "="
        },
        controller: function($scope) {
            $scope.hamburgerBool = false;
        },
        link: function(scope, elem, attrs, ngCtrl) {
            elem.bind('click', function(e) {
                e.preventDefault();

                scope.hamburgerBool = !scope.hamburgerBool;
                scope.$emit('mobile-ready', scope.hamburgerBool);
                scope.$apply();

                return false;
            });
        }
    }
});

/* ========  container directive ============== */
app.ng.directive("containerDirective", function() {
    return {
        restrict: "E",
        templateUrl: "partials/container.htm"
    }
});

/* ============ main directive =============== */
app.ng.directive("mainDirective", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "partials/main.htm"
    }
});

/* ============ logout button ================= */
app.ng.directive("btnlogoutDirective", function() {
    return {
        restrict: "E",
        replace: true,
        scope: {
            "label": "@"
        },
        template: '<button logout-directive>{{label}}</button>',
        link: function(scope, elem, attrs) {
            scope.label = attrs.label;
        }
    }
});

/* ============ logout from app ============= */
app.ng.directive("logoutDirective", function() {
    return {
        restrict: "A",
        controller: function() {
            this.logout = function() {
                alert('logout');
            }
        },
        link: function(scope, elem, attrs, ngCtrl) {
            elem.addClass('btn-logout').bind('click', function() {
                ngCtrl.logout();
            });

        }
    }
});

/* ============ input search wrapper ============ */
app.ng.directive('searchwrapDirective', function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "partials/searchWrap.htm",
        scope: {
            "searchVal": "="
        },
        controller: function($scope) {
            $scope.label = "search";
            $scope.searchVal = "";

            this.performSearch = function() {
                alert($scope.searchVal);
                $scope.searchVal = "";
            }
        },
        link: function(scope, elem, attrs, ngCtrl) {
            scope.label = attrs.label;

            elem.find('button').bind('click', function() {
                ngCtrl.performSearch();
            });
        }
    }
});

/* ============ 4 blue blocks ================ */
app.ng.directive("blueboxDirective", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "partials/blueBox.htm",
        scope: {
            "symbol": "@",
            "price": "@",
            "purchased": "@",
            "units": "@"
        },
        link: function(scope, elem, attrs) {
            scope.symbol = attrs.symbol;
            scope.price = attrs.price;
            scope.purchased = attrs.purchased;
            scope.units = attrs.units;
        }
    }
});

/* ============ time stamp block =============== */
app.ng.directive("blocktimeDirective", function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'partials/blockTime.htm',
        link: function(scope, elem, attrs) {
            scope.label = attrs.label;
            scope.field = attrs.field;
        }
    }
});

/* ============ graph block ==================== */
app.ng.directive("graphblockDirective", function() {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        templateUrl: 'partials/blockGraph.htm'
    }
});

/* ============ circle wrapper ==================== */
app.ng.directive("circlewrapDirective", function() {
    return {
        controller: function($scope) {
            var columnsArr = [];

            this.setColumns = function(_obj) {
                columnsArr.push(_obj);
            };
        }
    }
});

/* =========== circle pie charts  =============== */
app.ng.directive("circleblockDirective", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "partials/circleBlock.htm",
        scope: {
            num: '@',
            label: '@',
            float: '@',
            ind: '@',
            update: '@'
        },
        link: function(scope, elem, attrs) {
            scope.float = attrs.float;
            scope.num = attrs.num;
            scope.label = attrs.label;
            scope.ind = attrs.ind;
            scope.update = attrs.update;
        }
    }
});


/* =============== RAIL ================== */
app.ng.directive("railDirective", function() {
    return {
        restrict: "E",
        templateUrl: "partials/rail.htm",
        controller: function($scope) {
            $scope.user = {
                "name": "",
                "search": ""
            };

            this.searchRail = function() {
                alert($scope.user.search);
            };

            $scope.$on('mobile-ready2', function(evt, _bool) {
                $scope.hamburgerBool = _bool;
                $scope.$apply();
            });
        },
        link: function(scope, elem, attrs, ngCtrl) {
            scope.user = {
                "name": "john Smith",
                "search": ""
            }
        }
    }
});

app.ng.directive("railblockDirective", function() {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        templateUrl: "partials/railBlock.htm"
    }
});

/* =========== left rail inner  =============== */
app.ng.directive("railblockinnerDirective", function() {
    return {
        restrict: "E",
        require: "^railDirective",
        scope: {
            type: "@"
        },
        transclude: true,
        replace: true,
        templateUrl: "partials/railBlockInner.htm",
        link: function(scope, elem, attrs, ngCtrl) {
            scope.type = attrs.type;
        }
    }
});

/* =========== left rail header  ============== */
app.ng.directive("railheadDirective", function() {
    return {
        restrict: "E",
        replace: true,
        scope: {
            headname: "@"
        },
        controller: function($scope) {
            $scope.hello = "hello";
        },
        templateUrl: "partials/railHead.htm",
        link: function(scope, elem, attrs, ngCtrl) {
            scope.headname = attrs.headname;
        }
    }
});

app.ng.directive('railmenuDirective', function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "partials/railMenu.htm",

        scope: {
            "newnumber": "@",
            "updatednumber": "@",
            "favoritesnumber": "@"
        },

        controller: function($scope) {
            $scope.activeMenu = "overview";

            $scope.$on('toggle-ready', function(evt, _type, _target) {
                $scope.$broadcast('toggle-ready2', _type);
            });
        },

        link: function(scope, elem, attrs, ngCtrl) {
            scope.newnumber = attrs.newnumber;
            scope.updatednumber = attrs.updatednumber;
            scope.favoritesnumber = attrs.favoritesnumber;
        }
    }
});

/* =========== toggle left rail menu ============== */
app.ng.directive('railmenuwrapDirective', function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: 'partials/railWrap.htm',
        transclude: true,
        scope: {
            "type": "@",
            "activeMenu": "@",
            "activeStatus": "@"
        },

        controller: function($scope) {

            $scope.activeStatus = false;

            var _self = this;

            _self.setStatus = function(_type) {
                if ($scope.type == _type) {
                    $scope.activeStatus = !$scope.activeStatus;
                    return;
                };

                $scope.activeStatus = false;
            };

            _self.getType = function() {
                return $scope.type;
            };

            $scope.$on('toggle-ready2', function(evt, _type) {
                _self.setStatus(_type);
            });
        },

        link: function(scope, elem, attrs, ngCtrl) {

            var $type = attrs.type;
            scope.type = $type;
            if ($type === 'overview') {
                ngCtrl.setStatus($type);
            }
        }
    }
});

/* =========== buttons in left rail  ============= */
app.ng.directive("btnrailDirective", function() {
    return {
        restrict: "E",
        replace: true,
        scope: {
            "type": "@"
        },
        require: ['^railmenuwrapDirective', 'btnrailDirective'],
        controller: function($scope) {
            this.toggleBtn = function(evt) {
                $scope.$emit('toggle-ready', $scope.type, evt.target);
            }
        },

        templateUrl: 'partials/btnRail.htm',
        link: function(scope, elem, attrs, ngCtrls) {
            scope.type = ngCtrls[0].getType();
            scope.toggleBtn = function(evt) {

                ngCtrls[1].toggleBtn(evt);
            }
        }
    }
});

/* =========== start small table  =============== */
app.ng.directive("gridsmallDirective", ['tableService', function(tableService) {

    return {
        restrict: "E",
        require: "gridsmallDirective",
        controller: function($scope) {
            this.getColumns = function() {
                return $scope.smallCols;
            };
        },
        link: function(scope, elem, attrs, ngCtrl) {
            function getData() {
                tableService.getSmallTable().success(function(d) {
                    scope.smallRows = d.smallData;
                    scope.$broadcast('ready-render2', scope.smallRows, ngCtrl.getColumns())
                });
            };
            getData();
        }
    }
}]);

/* =========== display small all columns  ========= */
app.ng.directive("gridsmallColumns", function() {
    return {
        restrict: "E",
        controller: function($scope) {
            var columnsArr = [];
            this.setCol = function(_colObj) {
                columnsArr.push(_colObj)
            };
            this.setColumns = function() {
                $scope.smallCols = columnsArr;
            };
        },
        link: function(scope, elem, attrs, ngCtrl) {
            ngCtrl.setColumns();
        }
    }
});

/* =========== display small single column  ========= */
app.ng.directive("gridsmallCol", function() {
    return {
        restrict: "E",
        require: '^gridsmallColumns',
        link: function(scope, elem, attrs, ngCtrl) {
            ngCtrl.setCol({
                title: attrs.title,
                field: attrs.field
            });
        }
    }
});

/* =========== display small table  =========== */
app.ng.directive("gridsmalltableDirective", function() {
    return {
        restrict: "E",
        require: "gridsmalltableDirective",
        templateUrl: "partials/smallTable.htm",
        controller: function($scope) {
            $scope.$on('ready-render2', function(evt, rs, cs) {
                $scope.smallRows = rs;
                $scope.smallCols = cs;
            });
        }
    }
});

/* =========== display big table  ================ */
app.ng.directive("gridfullDirective", ['tableService', function(tableService) {
    return {
        restrict: "E",
        require: "gridfullDirective",
        controller: function($scope) {
            this.getColumns = function() {
                return $scope.cols;
            };
        },
        link: function(scope, elem, attrs, ngCtrl) {
            function getData() {
                tableService.getBigTable(true).success(function(d) {
                    scope.rows = d.bigData;
                    scope.$broadcast('ready-render1', scope.rows, ngCtrl.getColumns())
                });
            };
            getData();
        }
    }
}]);

/* =========== set all column in table  ========= */
app.ng.directive('gridColumns', function() {
    return {
        require: ['^gridfullDirective', 'gridColumns'],
        controller: function($scope) {
            var columnsArr = [];

            $scope.cols = [];

            this.setCol = function(colObj) {
                columnsArr.push(colObj);
            };

            this.setColumns = function() {
                $scope.cols = columnsArr;
            };
        },

        link: function(scope, elem, attrs, ngCtrls) {
            ngCtrls[1].setColumns();
        }
    }
});

/* =========== set single column in table  ========= */
app.ng.directive('gridCol', function() {
    return {
        require: '^gridColumns',

        link: function(scope, elem, attrs, ngctrl) {
            ngctrl.setCol({
                title: attrs.title,
                field: attrs.field
            });
        }
    }
});

/* ========== buttons in the rows of tables  ========= */
app.ng.directive('actionDirective', function() {
    return {
        restrict: "E",
        templateUrl: "partials/actionbuttons.htm",
        controller: function($scope) {
            this.btnAction = function(_type, _row) {
                //check to call
                alert(_type);
            };
        }
    }
});

/* ========= buttons in the rows of tables  ========= */
app.ng.directive('buttonactionDirective', function() {
    return {
        restrict: "E",
        templateUrl: 'partials/btn-big-table.htm',
        require: "^actionDirective",
        scope: {},
        link: function(scope, elem, attrs, ngCtrl) {
            scope.btn = attrs.type;
            elem.bind('click', function(evt) {
                var row = evt.currentTarget.closest('tr');
                ngCtrl.btnAction(attrs.type, row);
            });
        }
    }
});

/* =========== display big table  =============== */
app.ng.directive("gridtableDirective", function() {
    return {
        restrict: "E",
        replace: true,
        controller: function($scope) {
            $scope.$on('ready-render1', function(evt, rows, cols) {
                $scope.rows = rows;
                $scope.cols = cols;

                var dataset1 = [{
                    label: 'Abulia',
                    num: 37,
                    color: "#85bbd0"
                }, {
                    label: 'Betelgeuse',
                    num: 63,
                    color: '#296e8f'
                }];
                var dataset2 = [{
                    label: 'Abulia',
                    num: 22,
                    color: "#7b9bbe"
                }, {
                    label: 'Betelgeuse',
                    num: 78,
                    color: '#29518f'
                }];

                var donut1 = new makeDonut(dataset1);
                donut1.setfeatures('circle_1');
                var donut2 = new makeDonut(dataset2);
                donut2.setfeatures('circle_2');

                var ctx = document.getElementById("visualization");
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
                        datasets: [{
                            label: 'HDD',
                            data: [12, 19, 3, 5, 2, 3, 4],
                            backgroundColor: [
                                'rgba(176,3,93,.5)'
                            ],
                            borderColor: [
                                'rgba(176,3,93,1)'
                            ],

                            borderWidth: 1.5
                        }, {
                            label: 'GAM',
                            data: [3, 9, 11, 9, 22, 13, 16],
                            backgroundColor: [
                                'rgba(178,15,175,.5)'
                            ],
                            borderColor: [
                                'rgba(178,15,175,1)'

                            ],
                            borderWidth: 1.5
                        }, {
                            label: 'COLT',
                            data: [5, 6, 7, 9, 12, 23, 33],
                            backgroundColor: [
                                'rgba(22,106,109,.5)'
                            ],
                            borderColor: [
                                'rgba(22,106,109,.5)'

                            ],
                            borderWidth: 1.5
                        }, {
                            label: 'AARC',
                            data: [32, 34, 36, 33, 30, 30, 28],
                            backgroundColor: [
                                'rgba(41, 81, 143, .5)'
                            ],
                            borderColor: [
                                'rgba(41, 81, 143, 1)'
                            ],
                            borderWidth: 1.5
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            });
        },
        templateUrl: "partials/gridTable.htm"
    }
});

/*============ copyright stamp ============*/
app.ng.directive('copyright', function() {
    return {
        scope: {
            'year': '@'
        },
        replace: true,
        controller: function($scope) {
            $scope.year = "2017"
        },
        template: '<p class="copyright">&copy; copyright {{year}}</p>',
    }
});
