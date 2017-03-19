angular.module('sidenavDemo1').service("ReportService", function ($http, $q) {
    var result = [];
    var rawResult;

    function getRawData() {
        var defer = $q.defer();
        var superdata = {
            data: ""
            , method: "GET"
            , epoint: "report?month=3"
        }
        $http({
            url: "http://localhost:5000/test"
            , method: "POST"
            , headers: {
                "Content-Type": "application/json"
            }
            , data: superdata
        }).then(function (response) {
            defer.resolve(response);
        }, function (response) {
            defer.reject(response);
        });
        return defer.promise;
    }
    this.getReportData = function (reportType) {
        if (reportType == "completionStatus") {
            var defer = $q.defer();
            getRawData().then(function (res) {
                res = res.data;
                for (var d = 0; d < Object.keys(res).length; d++) {
                    console.log(res[Object.keys(res)[d]].length + "  " + Object.keys(res)[d])
                    if (res[Object.keys(res)[d]].length > 0) {
                        for (var f = 0; f < res[Object.keys(res)[d]].length; f++) {
                            result.push({
                                application: res[Object.keys(res)[d]][f].applicationName
                                , module: Object.keys(res)[d]
                                , month: "March"
                                , completed: 100
                            });
                        }
                    }
                }
                var retarr = result.filter(function (obj, pos, arr) {
                    return arr.map(mapObj => mapObj["application"] + mapObj["module"]).indexOf(obj["application"] + obj["module"]) === pos;
                });
                var retobj = {
                    res: res
                    , retarr: retarr
                };
                defer.resolve(retobj);
            }, function (res) {
                defer.reject(response);
            });
            return defer.promise;
        }
    }
})