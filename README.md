
## angulartics-cordova-facebook
  
[![NPM version][npm-image]][npm-url]
  
Facebook App Events plugin for cordova apps using  [Angulartics](http://github.com/luisfarzati/angulartics).  Based on [angulartics-facebook-pixel](https://github.com/mooyoul/angulartics-facebook-pixel) which is an excellent plugin for using the Facebook Pixel on your website.
  
## Install  
  

Install **[cordova-plugin-facebook](https://github.com/bisrael/cordova-plugin-facebook)** cordova plugin.

Install Angulartics (make sure you've read installation and setup instructions for [Angulartics](https://github.com/luisfarzati/angulartics#install) ).  
  
Then you can install this package with `npm`.  
  
### npm  
  
```shell  
npm install angulartics-cordova-facebook  
```  
  
Then add `angulartics.facebook.cordova` as a dependency for your app:  
  
```javascript  
require('angulartics')  
  
angular.module('myApp', [  
 'angulartics',  require('angulartics-cordova-facebook')  
]);  
```  
 

## Using built in Facebook events

You can use any event name and properties you like and Facebook will treat these as a custom event.

If you want Facebook to pick up their pre-defined events then use on the of the event names below. I have listed the Facebook code constant name and the actual string you should use below. See the official documentation here: [Facebook App Standard Events](https://developers.facebook.com/docs/app-events/getting-started-app-events-ios#predefined-events)

```
FBSDKAppEventNameAchievedLevel: "fb_mobile_level_achieved"
FBSDKAppEventNameAddedPaymentInfo: "fb_mobile_add_payment_info"
FBSDKAppEventNameAddedToCart: "fb_mobile_add_to_cart"
FBSDKAppEventNameAddedToWishlist: "fb_mobile_add_to_wishlist"
FBSDKAppEventNameCompletedRegistration: "fb_mobile_complete_registration"
FBSDKAppEventNameCompletedTutorial: "fb_mobile_tutorial_completion"
FBSDKAppEventNameInitiatedCheckout: "fb_mobile_initiated_checkout"
FBSDKAppEventNameRated: "fb_mobile_rate"
FBSDKAppEventNameSearched: "fb_mobile_search"
FBSDKAppEventNameSpentCredits: "fb_mobile_spent_credits"
FBSDKAppEventNameUnlockedAchievement: "fb_mobile_achievement_unlocked"
FBSDKAppEventNameViewedContent: "fb_mobile_content_view"
``` 
Pre-defined parameter names
```
FBSDKAppEventParameterNameContentID: "fb_content_id"
FBSDKAppEventParameterNameContentType: "fb_content_type"
FBSDKAppEventParameterNameCurrency: "fb_currency"
FBSDKAppEventParameterNameDescription: "fb_description"
FBSDKAppEventParameterNameLevel: "fb_level"
FBSDKAppEventParameterNameMaxRatingValue: "fb_max_rating_value"
FBSDKAppEventParameterNameNumItems: "fb_num_items"
FBSDKAppEventParameterNamePaymentInfoAvailable: "fb_payment_info_available"
FBSDKAppEventParameterNameRegistrationMethod: "fb_registration_method"
FBSDKAppEventParameterNameSearchString: "fb_search_string"
FBSDKAppEventParameterNameSuccess: "fb_success"
FBSDKAppEventParameterValueYes: "1"
FBSDKAppEventParameterValueNo: "0"
```

## Documentation  
  
Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).  

Page views will be tracked as a Facebook ContentView.

Any other event will appear as a custom event unless you use one of the predefined names above.
  
## Development  
  
```shell  
npm run build  
```  
  
## License  
  
[MIT](LICENSE)  
  
[npm-image]: https://img.shields.io/npm/v/angulartics-cordova-facebook.svg  
[npm-url]: https://npmjs.org/package/angulartics-cordova-facebook 
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg  
[license-url]: LICENSE  