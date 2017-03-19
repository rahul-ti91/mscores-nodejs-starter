angular.module("commonServiceModule", []).service("commonService", function ($http, $q) {
    this.requestMaker = function (url, method, data, successFunction, errorFunction) {
        var deferred = $q.defer();
        var superdata = {
            data: data
            , method: method
            , epoint: url
        };
        url = "http://localhost:5000/test";
        $http({
            method: "POST"
            , url: url
            , headers: {
                "Content-Type": "application/json"
            }
            , data: superdata
        }).then(function (response) {
            console.log(response);
            deferred.resolve(response);
        }, function (response) {
            console.log(response);
            deferred.reject("error");
        });
        return deferred.promise;
    }
}).constant("baseURL", "https://cores-msr-jpa.run.aws-usw02-pr.ice.predix.io/");