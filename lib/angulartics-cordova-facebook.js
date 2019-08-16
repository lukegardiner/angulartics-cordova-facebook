(function(window, angular, undefined) {
    'use strict';

    var callBack = function() {};

    /**
     * @ngdoc overview
     * @name angulartics.facebook.cordova
     * Enables Facebook App Events
     */
    angular.module('angulartics.facebook.cordova', ['angulartics'])
        .config(['$analyticsProvider', function ($analyticsProvider) {

            $analyticsProvider.settings.pageTracking.trackRelativePath = true;

            $analyticsProvider.registerPageTrack(function (path) {
                if (window.CordovaFacebook){
                    window.CordovaFacebook.logEvent({name: "fb_mobile_content_view", properties: {fb_content_id: path, value: 0}},
                        callBack,callBack);
                }
            });

            $analyticsProvider.registerEventTrack(function (action, properties) {
                properties = properties || {};
                if (window.CordovaFacebook){
                    window.CordovaFacebook.logEvent({name: action, properties: properties},
                        callBack,callBack);
                }
            });

        }]);
})(window, window.angular);