(self.webpackChunkampify=self.webpackChunkampify||[]).push([[698],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return h},kt:function(){return c}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},h=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=d(i),c=n,m=u["".concat(s,".").concat(c)]||u[c]||p[c]||r;return i?a.createElement(m,o(o({ref:t},h),{},{components:i})):a.createElement(m,o({ref:t},h))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},3919:function(e,t,i){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}i.d(t,{b:function(){return a},Z:function(){return n}})},4996:function(e,t,i){"use strict";i.d(t,{C:function(){return r},Z:function(){return o}});var a=i(2263),n=i(3919);function r(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,i=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,i,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,d=void 0!==s&&s;if(!i)return i;if(i.startsWith("#"))return i;if((0,n.b)(i))return i;if(l)return t+i;var h=i.startsWith(t)?i:t+i.replace(/^\//,"");return d?e+h:h}(r,i,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},5517:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return h},default:function(){return u}});var a=i(2122),n=i(9756),r=(i(7294),i(3905)),o=i(4996),l=["components"],s={id:"widgets",title:"Widgets",sidebar_label:"Widgets"},d={unversionedId:"widgets",id:"widgets",isDocsHomePage:!1,title:"Widgets",description:"Most of the editor widgets have an identical or near identical AMP version which is automatically used when a page is ampified.",source:"@site/docs/widgets.md",sourceDirName:".",slug:"/widgets",permalink:"/docs/widgets",version:"current",sidebar_label:"Widgets",frontMatter:{id:"widgets",title:"Widgets",sidebar_label:"Widgets"},sidebar:"someSidebar",previous:{title:"Page Statuses",permalink:"/docs/App"},next:{title:"Customized Sites, Widgets and Apps",permalink:"/docs/customized_sites"}},h=[{value:"Editor Widgets",id:"editor-widgets",children:[{value:"Accordion",id:"accordion",children:[]},{value:"Before and After",id:"before-and-after",children:[]},{value:"Blog Posts",id:"blog-posts",children:[]},{value:"Business Hours",id:"business-hours",children:[]},{value:"Calendar",id:"calendar",children:[]},{value:"Contact Form",id:"contact-form",children:[]},{value:"Deactivate reCAPTCHA to improve page speed",id:"deactivate-recaptcha-to-improve-page-speed",children:[]},{value:"Countdown",id:"countdown",children:[]},{value:"Coupons",id:"coupons",children:[]},{value:"Disqus",id:"disqus",children:[]},{value:"Facebook Feed",id:"facebook-feed",children:[]},{value:"Header",id:"header",children:[]},{value:"Main Menu",id:"main-menu",children:[]},{value:"Map",id:"map",children:[]},{value:"Multi-Location",id:"multi-location",children:[]},{value:"Photo Gallery",id:"photo-gallery",children:[]},{value:"Popups",id:"popups",children:[]},{value:"Row Background Design",id:"row-background-design",children:[]},{value:"RSS Feed",id:"rss-feed",children:[]},{value:"Site Navigation Links",id:"site-navigation-links",children:[]},{value:"Tabs",id:"tabs",children:[]},{value:"Twitter feed",id:"twitter-feed",children:[]},{value:"Zoom Meeting",id:"zoom-meeting",children:[]}]},{value:"eComerce Widgets",id:"ecomerce-widgets",children:[]},{value:"AMP support for old widgets",id:"amp-support-for-old-widgets",children:[]},{value:"3rd Party Widgets",id:"3rd-party-widgets",children:[{value:"Userway",id:"userway",children:[]},{value:"User Centric",id:"user-centric",children:[]}]}],p={toc:h};function u(e){var t=e.components,i=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"bigfont"},"Most of the editor widgets have an identical or near identical AMP version which is automatically used when a page is ampified. The following section details the expected behavior of each of the elements. In case there is a difference compared to the HTML version - it will be documented here."),(0,r.kt)("h2",{id:"editor-widgets"},"Editor Widgets"),(0,r.kt)("h3",{id:"accordion"},"Accordion"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Accordion.png")}),(0,r.kt)("p",null,"Accordion tabs open in a slightly smoother manner compared to the source."),(0,r.kt)("h3",{id:"before-and-after"},"Before and After"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Before_and_After.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the AMP version of Before and After, text labels appear as part of the image:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"They can be slided upon. "),(0,r.kt)("li",{parentName:"ul"},"They don\u2019t disappear."))),(0,r.kt)("li",{parentName:"ul"},"Arrows:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Arrows will have the same color as in the source. Their design is slightly different."))),(0,r.kt)("li",{parentName:"ul"},"Unlike the HTML version, AMP Before & After images don\u2019t get cropped when the width of a screen is narrow - the component continues to match the visible width."),(0,r.kt)("li",{parentName:"ul"},"When moving the slider, developers in the dev tool console will get an error notice: \u201cUnable to preventDefault inside passive event listener invocation\u201d. This is expected and doesn\u2019t affect the element or the page.")),(0,r.kt)("h3",{id:"blog-posts"},"Blog Posts"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Blog_Posts.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List Mode:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The width of the component can be a few pixels thinner compared to the HTML version."),(0,r.kt)("li",{parentName:"ul"},"If the element shadow is defined to be larger than the default, it might get slightly trimmed at its edges. "),(0,r.kt)("li",{parentName:"ul"},"On some occasions, the bottom-most element will have its bottom shadow trimmed."),(0,r.kt)("li",{parentName:"ul"},"The Load-more button always shows up, and will continue to show-up even after there are no more posts to display. When clicked it will not fetch new posts. "),(0,r.kt)("li",{parentName:"ul"},"On some occasions, the Load-more button might get slightly trimmed at its bottom edge due to variations in the component height in the visitors' different devices. This is fixed when the button is clicked."))),(0,r.kt)("li",{parentName:"ul"},"Posts Slider Mode:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Similar to the Image Slider, the fade-in-out animation is presented in AMP as a sliding motion. This cannot be changed.")))),(0,r.kt)("h3",{id:"business-hours"},"Business Hours"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Business_Hours.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Business hours will show up as identical to the HTML version."),(0,r.kt)("li",{parentName:"ul"},"Changes and updates to the dates will show up in the AMP version when Google reindexes the page "),(0,r.kt)("li",{parentName:"ul"},"Special Dates:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Like the HTML version, Special Dates don\u2019t show up until 2 weeks before the date."),(0,r.kt)("li",{parentName:"ul"},"Having said that, Special Dates will show up in the published AMP version only when Google re-indexes that version. This means that in the AMP version, special dates might show up later compared to the HTML version.")))),(0,r.kt)("h3",{id:"calendar"},"Calendar"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Calendar.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google Calendar must be associated with a public account, or the content of the frame will not be visible."),(0,r.kt)("li",{parentName:"ul"},"The AMP version of the calendar is the Google default calendar. The content of the calendar is identical to the source. The calendar design can\u2019t be edited. We are aware of the big gap in design compared to the source. Do we need to improve this feature? Let us know at ",(0,r.kt)("a",{parentName:"li",href:"mailto:help@ampify.io"},"help@ampify.io"))),(0,r.kt)("h3",{id:"contact-form"},"Contact Form"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Contact_Form.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"reCAPTCHA"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If reCAPTCHA verification is turned on for a specific form, the AMP version of it will appear in the AMP page."),(0,r.kt)("img",{className:"shadow",width:"200px",src:(0,o.Z)("recaptcha.png")})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The reCAPTCHA badge is positioned at the bottom of the form, above the 'Submit' button. It can't be edited.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For a form-submit to be successful, the visitor is requested to check the ckeckbox. It is possible to send a form without checking the reCAPTCHA checkbox, however an error will show up.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AMP recaptcha may take a few seconds to load after the site is live.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AMP forms with reCAPTCHA verification require double tap on the 'submit' button. After the first tap, an icon appears on the Sumbit button, indicating the requirement for the 2nd tap. The visitor will receive the form submitted notification. "),(0,r.kt)("img",{className:"",width:"60px",src:(0,o.Z)("clickagain.png")}))))),(0,r.kt)("h3",{id:"deactivate-recaptcha-to-improve-page-speed"},"Deactivate reCAPTCHA to improve page speed"),(0,r.kt)("p",null,"  reCAPTCHA in AMP can impact performance. It is recommended to switch off the reCAPTCHA verification in AMP by disabling it in the editor:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the form settings, uncheck the 'Add reCAPTCHA validation' button. "),(0,r.kt)("img",{className:"shadow",width:"500px",src:(0,o.Z)("recaptcha_disable.png")})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the button is not available, it is possible to edit the code of the widget:\nin the settings menu, click 'Edit HTML/CSS'"),(0,r.kt)("img",{className:"shadow",width:"500px",src:(0,o.Z)("recaptcha_settings.png")}),(0,r.kt)("p",{parentName:"li"},"  in the new window, set the captcha to 'false, click 'update', and republish the site."),(0,r.kt)("img",{className:"shadow",width:"550px",src:(0,o.Z)("recaptchaCSS.png")})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tracking Code"),": Javascripts are not allowed in AMP, so any tracking code will not persist to the AMP version. Tracking is enabled in AMP via the Google-Tag-Manager, Google Analytics, and your Editor\u2019s Analytics Dashboard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"File Upload"),": at this stage, file upload is not supported in AMP.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Time and Date pickers"),": time and date pickers have a predefined design which cannot be edited:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Time Picker:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Width: 40% of HTML's time picker width, minimum of 25% of screen width."),(0,r.kt)("li",{parentName:"ul"},"A click on the clock icon opens the time picker."),(0,r.kt)("li",{parentName:"ul"},"Time picker\u2019s text placeholder doesn\u2019t appear in the AMP version."),(0,r.kt)("li",{parentName:"ul"},"24/12 hours format is dynamically determined per the visitor\u2019s operating system preferences."))),(0,r.kt)("li",{parentName:"ul"},"Date Picker:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Closing the date picker after selection is done via the \u2018x\u2019 button."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required Fields"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When a required field isn\u2019t filled upon send, it will get a red border to indicate that it is required for the form to be submitted."),(0,r.kt)("li",{parentName:"ul"},"Checkboxes and Radio selectors display a red text indicating the required field, and not a red-border.")))),(0,r.kt)("h3",{id:"countdown"},"Countdown"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Countdown.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'Countdown is Over' message:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the AMP version, when the counter reaches 0000, and after a three seconds delay, the Countdown is Over message will show up. The counter will be removed, even if the component was defined to show the message beneath the counter in the HTML version. "),(0,r.kt)("li",{parentName:"ul"},"When loading a page after the countdown has been completed, as the counter element is scrolled into view, the counter will first show the time passed since countdown over for a duration of three seconds, before the Countdown is Over message will show up."),(0,r.kt)("li",{parentName:"ul"},"A long Countdown is Over message might get trimmed by the bottom of the counter box - the counter box doesn\u2019t change its height for long messages, and the message should be written and designed accordingly."))),(0,r.kt)("li",{parentName:"ul"},"Technical design aspects of the Countdown is Over Message in the AMP page:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Message line height is 1.2, even if defined otherwise."),(0,r.kt)("li",{parentName:"ul"},"Digits tiles with shadows: parts of the shadow might get trimmed at their far edges.")))),(0,r.kt)("h3",{id:"coupons"},"Coupons"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Coupons.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New coupons and updates to existing coupons will be reflected in the AMP page after Google will re-index it."),(0,r.kt)("li",{parentName:"ul"},"Expiration Date:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For cases where an AMP page was created or updated when a coupon was already expired, extending the coupons expiration date will be reflected in the AMP version when Google will reindex the page. Until then the cover expiration notice won\u2019t show up, however clicking on its buttons won\u2019t open the popups."))),(0,r.kt)("li",{parentName:"ul"},"We\u2019re aware of an issue in which image coupons don't appear inside popups. This behaviour is the same as in the HTML page. Once it will be fixed in the HTML page - the fix will be reflected in the AMP page."),(0,r.kt)("li",{parentName:"ul"},"Coupons Pop Ups:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Under certain circumstances, popup masks (the opaque overlay behind the popup window) may be opaque-white and not opaque-dark.")))),(0,r.kt)("h3",{id:"disqus"},"Disqus"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Disqus.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trusted Domains:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For the DIsqus widget to work on the AMP page, add \u2018ampify.io\u2019 to the list of trusted domain in your Disqus dashboard ",(0,r.kt)("a",{href:"http://disqus.com/admin/settings/advanced/",target:"_blank"},"advanced settings tab"),"."))),(0,r.kt)("li",{parentName:"ul"},"In cases where the Disqus widget is positioned in the top of the page, the widget will load partially collapsed, and will expand to reveal all comments when the user taps on the \u2018Show All\u2019 button.")),(0,r.kt)("h3",{id:"facebook-feed"},"Facebook Feed"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Facebook_Feed.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Facebook Feed element is identical to the source, with a single change: the height of the window cannot exceed 500px - if the HTML component has a height above 500px - the AMP component will be set to 500px.")),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("p",null,"Site header is identical to the source. For headers which change on scroll:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For cases where the logo image changes on scroll, if that image is heavy it might cause irregularities in the header behavior. To fix, update the AMP page. "),(0,r.kt)("li",{parentName:"ul"},"Menu Hamburger icon color doesn\u2019t change on scroll. ")),(0,r.kt)("h3",{id:"main-menu"},"Main Menu"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sometimes sites define the Humburger Icon to change color on scroll. On the AMP version, the icon color doesn't change."),(0,r.kt)("li",{parentName:"ul"},"Occasionaly, if the menu is long and reaches below the fold (i.e. below the bottom of the device screen), scrolling down might not act on the menu. If you encounter this issue, please reach out to ",(0,r.kt)("a",{parentName:"li",href:"mailto:help@ampify.io"},"help@ampify.io"),".")),(0,r.kt)("h3",{id:"map"},"Map"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Map.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In AMP pages, the map is a Google Map, instead of the HTML version\u2019s Mapbox."),(0,r.kt)("li",{parentName:"ul"},"Location name tooltip (named \u2018popup\u2019 in the editor) is replace with a fixed tile at the corner of the map."),(0,r.kt)("li",{parentName:"ul"},"AMP maps do not support map layouts which differ from the default.")),(0,r.kt)("h3",{id:"multi-location"},"Multi-Location"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Multi-Location.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single view of all locations is not supported. The top most location is the one presented first."),(0,r.kt)("li",{parentName:"ul"},"Google Map is used, and not Mapbox, like the HTML version.")),(0,r.kt)("h3",{id:"photo-gallery"},"Photo Gallery"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Photo_Gallery.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Images viewer is the element which displays the images when they are clicked within the page."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Includes an option to view all images inside the image viewer mode"),(0,r.kt)("img",{className:"shadow",width:"200px",src:(0,o.Z)("imageViewer.png")})," ",(0,r.kt)("img",{className:"shadow",width:"200px",src:(0,o.Z)("AllImagesViewer.png")})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Share option and image counter inside the image viewer are not present in AMP.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Image description is the text that shows up under the \u2018description\u2019 field of the image in the editor.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Image descriptions are aligned to the left and not centered.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Very seldomly, an image might show up with an error message. This has nothing to do with the AMP site itself. It is caused by a temporary rendering issue on the client side. If the user will slide away from the image and back again, or refresh the page - the issue will be resolved. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Instagram")," - Images are pulled from Instagram when the AMP page is updated by Google. This may lead to the newest images not showing up in the Photo Gallery until the next update of the page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Image Buttons: very seldomly, an image button might show up in the AMP version, when it doesn\u2019t exist in the source page. To solve this, in the editor, reset that button\u2019s visibility (click to show it, wait 5 seconds, and hide it again), re-publish the site, and update the AMP page. "))),(0,r.kt)("h3",{id:"popups"},"Popups"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If a popup is triggered from within another popup (e.g. a button that opens a popup sits within another popup) - the inner popup will not open as a lightbox, but rather open in a new tab. Do you require assistance with this feature? Contact us at ",(0,r.kt)("a",{parentName:"li",href:"mailto:help@ampify.io"},"help@ampify.io"))),(0,r.kt)("h3",{id:"row-background-design"},"Row Background Design"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image Slider:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the AMP version, only sliding animation is supported. Other type of animation will be converted to the sliding motion."),(0,r.kt)("li",{parentName:"ul"},"The 'tile repeat' and 'tile no-repeat' layouts will be shown as 'cover' in the AMP version."),(0,r.kt)("li",{parentName:"ul"},"All other aspects of the row background slider are identical.")))),(0,r.kt)("h3",{id:"rss-feed"},"RSS Feed"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("RSS_Feed.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RSS Feed widget is not enabled in AMP.")),(0,r.kt)("h3",{id:"site-navigation-links"},"Site Navigation Links"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Site_Navigation_Links.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Site Navigation Links widget is identical to the HTML version, with a single difference: opened sub-menus can be closed by tapping anywhere outside the opened sub-menu, but not by tapping the submenu\u2019s title.")),(0,r.kt)("h3",{id:"tabs"},"Tabs"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Tabs.png")}),(0,r.kt)("p",null,"Accordion tabs open in a slightly smoother manner compared to the source."),(0,r.kt)("h3",{id:"twitter-feed"},"Twitter feed"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Twitter_feed.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The feed width might be 2-3 pixels thinner compared to the source."),(0,r.kt)("li",{parentName:"ul"},"Feed Height: to prevent visible content shifting, which may harm user experience and even render the AMP invalid, users may see a \u2018load more\u2019 button at the bottom of the feed in the following cases:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the bottom of the feed is within in the top 75% of the screen when the viewport is at the top of the page."),(0,r.kt)("li",{parentName:"ul"},"If cases where less content is available to show in the feed compared to when the AMP page was created (rare).")))),(0,r.kt)("h3",{id:"zoom-meeting"},"Zoom Meeting"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Zoom_Meeting.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zoom Meeting widget is not enabled in AMP.")),(0,r.kt)("h2",{id:"ecomerce-widgets"},"eComerce Widgets"),(0,r.kt)("img",{className:"higher",width:"50px",src:(0,o.Z)("Store_Widgets.png")}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"eCommerce is not yet fully supported in AMP. While some store related widgets are supported, product pages, as well as Main Store widget can't be ampified."),(0,r.kt)("li",{parentName:"ul"},"Store Product Gallery:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Enabled in AMP, with the following changes:"),(0,r.kt)("li",{parentName:"ul"},"Prices, Sale status, Out-of-Stock status and product details are updated when the page is being updated - they are not directly synced to the live prices in the site. If a price changes in the site - it will take effect in the AMP version only after the next update of the AMP page by Google, which may take up to several days. Keep this in mind if the prices or product statuses change frequently in the site.")))),(0,r.kt)("h2",{id:"amp-support-for-old-widgets"},"AMP support for old widgets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ampify supported the widgts' latest version. If you encounter an issue in Ampifying a specific widget, check in the Editor if this widget is up to date.")),(0,r.kt)("h2",{id:"3rd-party-widgets"},"3rd Party Widgets"),(0,r.kt)("h3",{id:"userway"},"Userway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Userway icon shows up like in the HTML version. It can be hidden in a similar fashion. When clicking on the icon itself, the page will redirect to the source page for the user to interact with the source Userway widget.  ")),(0,r.kt)("h3",{id:"user-centric"},"User Centric"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User Centric cookie notice shows up like in the HTML version, and behaves in a similaqr fashion. When accepting the notice, it disappears. When denying or clicking the settings button, the page will redirect to the source page for the user to interact with the source UserCentric widget.")))}u.isMDXComponent=!0}}]);