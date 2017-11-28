define(['plugins/router',
    'durandal/app',
    'knockout'],
    function (router, app, ko) {
        return {
        router: router,
        userId: ko.observable('Guest'),
        welcomeMessage: ko.observable(""),
        messagePopupModel: ko.observable(""),
        activationDataForChild: ko.observable(),
        activationData: ko.observable(),
        leftMenuModel: ko.observable(),
        isUserLoggedIn: ko.observable(false),
        activate: function () {
            router.map([
                { route: '', title: '', moduleId: 'viewmodels/bidding', nav: true }
            ]).buildNavigationModel();
            return router.activate();
        }

    };
});
