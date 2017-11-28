define([
    'plugins/router',
    'durandal/app',
    'knockout',
    'models/apiServices'],
    function (router, app, ko, apiServices) {
        var phasesMasterVM = function () {
            var self = this;
            this.pageHeading = ko.observable("");
            this.formDataArray = ko.observableArray([]);

            this.activate = function (activationData) {
                self.pageHeading("Bidding Detail");
                self.getBiddingRecords();
            };

            this.getBiddingRecords = function () {
                var dsPromise = apiServices.execute('bidding', 'read', null);
                dsPromise.then(function (response) {
                    if (response && response.data) {
                        var resultArrayData = response.data;
                        var bidPercent = 0;
                        for (var i = 0; i < resultArrayData.length; i++) {
                            bidPercent = (resultArrayData[i].bidAmount / resultArrayData[i].winAmount) * 100;
                            if (bidPercent > 50) {
                                resultArrayData[i].rowClass = "highlighted-row-background";
                            }
                            else {
                                resultArrayData[i].rowClass = "normal-row-background";
                            }
                        }
                        self.formDataArray([]);
                        var unwrapArray = self.formDataArray();
                        unwrapArray.push.apply(unwrapArray, resultArrayData);
                        self.formDataArray.valueHasMutated();
                    }
                });
            };
        };

        return phasesMasterVM;
    });