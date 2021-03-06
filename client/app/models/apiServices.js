﻿// Module to call rest api services
define([], function () {
        var apiHost = "http://127.0.0.1:5000/api";
        var apiServices = {
            execute: execute
        };

        function execute(module, operation, requestParams) {
            var apiUrl = apiHost + "/" + module + '/' + operation;
            var requestType = 'post';

            if (operation === "read" || operation.includes('get')) {
                requestType = 'get';
            }
            
            var deferred = $.Deferred();
            $.ajax({
                type: requestType,
                url: apiUrl,
                data: requestParams,
                success: function (response) {
                    deferred.resolve(response);
                },
                error: function (err) {
                    deferred.reject(err.responseText);
                }
            });
            return deferred.promise();
        };

        return apiServices;
    });