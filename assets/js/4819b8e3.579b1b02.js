(self.webpackChunkampify=self.webpackChunkampify||[]).push([[957],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return d},kt:function(){return m}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(i),m=n,h=l["".concat(p,".").concat(m)]||l[m]||u[m]||o;return i?r.createElement(h,a(a({ref:t},d),{},{components:i})):r.createElement(h,a({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}l.displayName="MDXCreateElement"},3919:function(e,t,i){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}i.d(t,{b:function(){return r},Z:function(){return n}})},4996:function(e,t,i){"use strict";i.d(t,{C:function(){return o},Z:function(){return a}});var r=i(2263),n=i(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,i=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,i,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,s=void 0!==a&&a,p=o.absolute,c=void 0!==p&&p;if(!i)return i;if(i.startsWith("#"))return i;if((0,n.b)(i))return i;if(s)return t+i;var d=i.startsWith(t)?i:t+i.replace(/^\//,"");return c?e+d:d}(o,i,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},1633:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return l}});var r=i(2122),n=i(9756),o=(i(7294),i(3905)),a=i(4996),s=["components"],p={id:"customized_sites",title:"Customized sites & Apps",sidebar_label:"Customized Sites & Apps"},c={unversionedId:"customized_sites",id:"customized_sites",isDocsHomePage:!1,title:"Customized sites & Apps",description:"Ampify was set up to support the editor widgets and their respective range of in-editor custimizations.",source:"@site/docs/customized_sites.md",sourceDirName:".",slug:"/customized_sites",permalink:"/duda-docs/docs/customized_sites",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/customized_sites.md",version:"current",sidebar_label:"Customized Sites & Apps",frontMatter:{id:"customized_sites",title:"Customized sites & Apps",sidebar_label:"Customized Sites & Apps"},sidebar:"someSidebar",previous:{title:"Widgets",permalink:"/duda-docs/docs/Widgets"},next:{title:"Analytics",permalink:"/duda-docs/docs/Analytics"}},d=[{value:"HTML and CSS Customization",id:"html-and-css-customization",children:[]},{value:"JS Customization",id:"js-customization",children:[]},{value:"Custom HTML Widget",id:"custom-html-widget",children:[]},{value:"3rd Party Apps",id:"3rd-party-apps",children:[]},{value:"Appstore Apps",id:"appstore-apps",children:[]}],u={toc:d};function l(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",null," Ampify was set up to support the editor widgets and their respective range of in-editor custimizations."),(0,o.kt)("h3",{id:"html-and-css-customization"},"HTML and CSS Customization"),(0,o.kt)("p",null,"A site's HTML or CSS can be manually edited via the Editor's Developer Mode, or via each individual widget's 'Edit HTML/CSS' option. Ampify will try to create the AMP version based of the customized code. Most times it will manage to digest the changes and create the Identical AMP version. Many times, however, discrepencies might surface. These can heppen in cases where the changes are more significant or when the changes contradict the defult AMP creation logic."),(0,o.kt)("img",{className:"shadow",width:"400px",src:(0,a.Z)("devwindow.png")})," ",(0,o.kt)("img",{className:"shadow",width:"100%",src:(0,a.Z)("devmode.png")}),(0,o.kt)("p",null,"When ampifying a cusomized page, ",(0,o.kt)("strong",{parentName:"p"},"Ampify can't tell if changes were made to the page's HTML/CSS"),", hence the page will be ampified normally. It is important that a proper review of the page's desgin would take place prior to approving it. The review should be more particular for the page's componenets which were manually customized. "),(0,o.kt)("h3",{id:"js-customization"},"JS Customization"),(0,o.kt)("p",null,"AMP doesn't support Java Scripts in the same way HTML does. When scripts are manually edited or entered into a webpage, they ",(0,o.kt)("strong",{parentName:"p"},"will not work in the AMP version"),". When ampifying a cusomized page, ",(0,o.kt)("strong",{parentName:"p"},"Ampify can't tell if custom scripts were created"),", hence the page will be ampified normally. Particular review is required on the expected scripted behhaivior prior to approving the AMP page to go live."),(0,o.kt)("h3",{id:"custom-html-widget"},"Custom HTML Widget"),(0,o.kt)("img",{className:"",width:"50px",src:(0,a.Z)("customhtmlwidget.png")}),(0,o.kt)("p",null,"Similar to manual cusomization of specific widgets or the entire site, Custom HTML widget contains code which was manually added to the page. The same restrictions apply to that code as described in the previous sections. Unlike other types of customization, when a Custom HTML widget is used in a page - Ampify requires a speciifc review and approval of the widget in order to enable the approval of the page."),(0,o.kt)("h3",{id:"3rd-party-apps"},"3rd Party Apps"),(0,o.kt)("p",null,"3rd party apps referes to any external tool which is implemented in the site, and is not an Editor widget or an app-store app. The same restrictions apply to that code as described in the previous sections. Many external tools already have AMP specific support, which is usually associated with a different tag to be used in the site. If the HTML version of the widget doesn't work in the Ampified page, check with your provider for their support in AMP."),(0,o.kt)("h3",{id:"appstore-apps"},"Appstore Apps"),(0,o.kt)("p",null,"Ampify doesn't support 3rd-party apps which utilize scripts in the HTML page.\nIf you are an app developer and you'd like your app to be supported in Ampfied pages, reach out to us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:help@ampify.io"},"help@ampify.io"),"."),(0,o.kt)("img",{className:"shadow",width:"400px",src:(0,a.Z)("appsote.png")}))}l.isMDXComponent=!0}}]);