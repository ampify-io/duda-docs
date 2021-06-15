(self.webpackChunkampify=self.webpackChunkampify||[]).push([[558],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},564:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(4996),["components"]),l={id:"General",title:"General",sidebar_label:"General"},s={unversionedId:"General",id:"General",isDocsHomePage:!1,title:"General",description:"Animations",source:"@site/docs/General.md",sourceDirName:".",slug:"/General",permalink:"/duda-docs/docs/General",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/General.md",version:"current",sidebar_label:"General",frontMatter:{id:"General",title:"General",sidebar_label:"General"},sidebar:"someSidebar",previous:{title:"Troubleshooting",permalink:"/duda-docs/docs/QnA"}},u=[{value:"Animations",id:"animations",children:[]},{value:"Hover Effects",id:"hover-effects",children:[]},{value:"Multi-Languages",id:"multi-languages",children:[]},{value:"Personalization",id:"personalization",children:[]},{value:"Dynamic Mode Pages",id:"dynamic-mode-pages",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"animations"},"Animations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Site animations, i.e. ornamental elements which animate into their position as the user slides down the page, might appear differently in the AMP version. This is caused due to the manner in which Ampify interacts with each page as it records its design and elements. If this behavior leads to significant issues in your site, let us know at ",(0,i.kt)("a",{parentName:"li",href:"mailto:help@ampify.io"},"help@ampify.io"),".")),(0,i.kt)("h3",{id:"hover-effects"},"Hover Effects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As hover can only take place in desktop, and AMP is intended for mobile devices, all hover effects are disabled.")),(0,i.kt)("h3",{id:"multi-languages"},"Multi-Languages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whenever a page is selected to be Ampified, all its language versions get Ampified as well. "),(0,i.kt)("li",{parentName:"ul"},"Multiple language versions of a page are all counted as one for the purpuse of your Ampify plan page limit. For example, a site that has 5 language versions and is in the Ampify Free plan can Ampify one of its pages. Each one of the 5 different language versions of that single page will also be Ampified."),(0,i.kt)("li",{parentName:"ul"},"For languages which are not the site's default language, access to their AMP version is not possible via the application. The AMP version can be accessed from the site itself, by adding '?amp=true' to the end of the page URL."),(0,i.kt)("li",{parentName:"ul"},"Languages variations - variations of the same language are considered as a single language. E.g. ",(0,i.kt)("em",{parentName:"li"},"English US")," and ",(0,i.kt)("em",{parentName:"li"},"English UK")," are both treated as English, and their AMP version will be the same version.")),(0,i.kt)("h3",{id:"personalization"},"Personalization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Personalization features are not enabled in the AMP version of a page. The reason is that for a site to be AMP valid, most of its behaviors need to be triggered by the visitor. This means that popups, snackbar notifications and other components which are automatically triggered cannot be triggered in the AMP version."),(0,i.kt)("li",{parentName:"ul"},"In the HTML version - these personalization rules continue to behave as expected, and will be applied to any visitor that lands in your site from the AMP page. For example, in a site that has an automatic welcome popup which is triggered for all visitors - a visitor which lands on an AMP page will not get that popup. Once the visitor will move from the AMP page to a different page in the site - that page will already be the HTML version (and not the AMP version). If the welcome popup is defined to be triggered in all the pages of a site - it will popup for the visitor.")),(0,i.kt)("h3",{id:"dynamic-mode-pages"},"Dynamic Mode Pages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dynamic Mode Pages are supported. They appear under Blog Posts section.")))}p.isMDXComponent=!0}}]);