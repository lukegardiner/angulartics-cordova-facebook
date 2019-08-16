(function(window, angular, undefined) {
    'use strict';

    var eventList = [
        'ViewContent', 'Search', 'AddToCart',
        'AddToWishlist', 'InitiateCheckout',
        'AddPaymentInfo', 'Purchase', 'Lead',
        'CompleteRegistration'];

    /**
     * @ngdoc overview
     * @name angulartics.facebook.cordova
     * Enables Facebook App Events
     */
    angular.module('angulartics.facebook.cordova', ['angulartics'])
        .config(['$analyticsProvider', function ($analyticsProvider) {

            $analyticsProvider.settings.pageTracking.trackRelativePath = true;

            $analyticsProvider.registerPageTrack(function (path) {

                if(window.fbq){
                    window.fbq('track', 'PageView');
                } else if (window.CordovaFacebook){
                    window.CordovaFacebook.logEvent({name: "fb_mobile_content_view", properties: {fb_content_id: path, value: 0}},
                        function(){console.log('FB event success');},
                        function(error){console.log('FB event failed', error);});
                }
            });

            $analyticsProvider.registerEventTrack(function (action, properties) {
                properties = properties || {};
                if(window.fbq){
                    eventList.indexOf(action) === -1 ?
                        window.fbq('trackCustom', action, properties) :
                        window.fbq('track', action, properties);
                } else if (window.CordovaFacebook){
                    window.CordovaFacebook.logEvent({name: action, properties: properties},
                        function(){console.log('FB event success');},
                        function(error){console.log('FB event failed', error);});
                }
            });

        }]);
})(window, window.angular);