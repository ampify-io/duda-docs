(self.webpackChunkampify=self.webpackChunkampify||[]).push([[143],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return g}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),g=n,h=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,{b:function(){return r},Z:function(){return n}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return i},Z:function(){return o}});var r=a(2263),n=a(3919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,p=i.absolute,l=void 0!==p&&p;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(s)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+c:c}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8348:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o=a(4996),s=["components"],p={id:"page_speed_test",title:"Page Speed Preview",sidebar_label:"Page Speed Preview"},l={unversionedId:"page_speed_test",id:"page_speed_test",isDocsHomePage:!1,title:"Page Speed Preview",description:"Google's Page Preview tool provides a visual way to experience the increased speed of AMP pages. It compelements Google's Page Speed Insights, which does not take into considiration factors that facilitatae the AMP speed, leading to subpurb scores compaerd to reality.",source:"@site/docs/page_speed_test.md",sourceDirName:".",slug:"/page_speed_test",permalink:"/docs/page_speed_test",version:"current",sidebar_label:"Page Speed Preview",frontMatter:{id:"page_speed_test",title:"Page Speed Preview",sidebar_label:"Page Speed Preview"},sidebar:"someSidebar",previous:{title:"About AMP",permalink:"/docs/about_amp"},next:{title:"Page Statuses",permalink:"/docs/App"}},c=[{value:"Previewing the speed of an AMP page",id:"previewing-the-speed-of-an-amp-page",children:[]},{value:"Traditional Speed tests can be inaccurate for AMP",id:"traditional-speed-tests-can-be-inaccurate-for-amp",children:[]},{value:"reCAPTCHA&#39;s affect on page speed",id:"recaptchas-affect-on-page-speed",children:[]}],d={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Summary")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," Google's Page Preview tool provides a visual way to experience the increased speed of AMP pages. It compelements Google's ",(0,i.kt)("a",{href:"https://developers.google.com/speed/pagespeed/insights/",target:"_blank"},"Page Speed Insights"),", which does not take into considiration factors that facilitatae the AMP speed, leading to subpurb scores compaerd to reality."))),(0,i.kt)("a",{href:"https://storage.googleapis.com/duda-ampify-app/static%20marketing/AMP%20sped%20simulation.mp4"},(0,i.kt)("img",{width:"600px",src:(0,o.Z)("speedgif.gif")})),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"previewing-the-speed-of-an-amp-page"},"Previewing the speed of an AMP page"),(0,i.kt)("p",null,"The AMP Page preview isllustrates the way an AMP page would show up in Google's search results. Unlike traditional web speed tests, the preview tool facilitates the pre-loading of the AMP, which provides a way to experience how fast it really is."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AMP page title:")," the preview presents the following title : ",(0,i.kt)("em",{parentName:"p"},"sbsites.ampify.io"),". This is only for the preview - the actual title will be the domain of the website. "),(0,i.kt)("img",{className:"shadow",width:"300px",src:(0,o.Z)("previewtitle.png")}),(0,i.kt)("h3",{id:"traditional-speed-tests-can-be-inaccurate-for-amp"},"Traditional Speed tests can be inaccurate for AMP"),(0,i.kt)("p",null,"Web speed tests like ",(0,i.kt)("a",{href:"https://developers.google.com/speed/pagespeed/insights/",target:"_blank"},"Page Speed Insights")," are conducted in the same manner for all webpages, wether plain HTML or AMP. However AMP derives much of its speed from two factors, ",(0,i.kt)("strong",{parentName:"p"},"none of which is taken into consideration")," in plain speed tests:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"AMP Cache")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"How it improves speed"),": AMP pages are served by Google after being cached on Google's servers, optimized (images resize, prefetch hints, minify html and CSS, etc.), and distributed to Google\u2019s Content-Delivery-Network (CDN). These measures significantly improve actual site speed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"What happens in the Speed Test"),": The test loads the page directly from Ampify's servers (even if the server is on the other side of the world) without usage of the CDN to load the page from a nearby server. The loaded pages are also lacking the added optimization which they undergo when being cached."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Page Pre-loading")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"How it improves speed"),": AMP pages are pre-loaded to the visitors devices before clicking to open it. When the click takes place - the already loaded page appears in an instant. ",(0,i.kt)("strong",{parentName:"p"},"Plus"),", The heaviest component of an AMP page is shared across all AMP pages. Most visitors already have it in their device from previous visits to other AMP pages - it is not downloaded for each site.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"What happens in the Speed Test"),": In web speed tests, all the components are fully downloaded + no preloading takes place. These factors reduce the LCP (Largest Contentful Paint), and the FCP (First Contentful Paint), which are two of the most significant factors for a high Core-Web-Vitals score."))),(0,i.kt)("p",{parentName:"li"},"The result is that a page speed score of 67 can actually be, with real life data, above 90."),(0,i.kt)("img",{className:"shadow",width:"600px",src:(0,o.Z)("Speedtestbefore.png")}),(0,i.kt)("br",null),(0,i.kt)("img",{className:"shadow",width:"600px",src:(0,o.Z)("Speedtestafter.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"More about the data Google displays in the Speed Test: ",(0,i.kt)("a",{href:"https://developers.google.com/speed/docs/insights/v5/about#faq",target:"_blank"},"developers.google.com/speed/docs/insights/v5/about#faq")),(0,i.kt)("li",{parentName:"ul"},"More about the issues of measuring AMP page speed: ",(0,i.kt)("a",{href:"https://blog.amp.dev/2018/01/17/measuring-amp-performance/",target:"_blank"},"blog.amp.dev/2018/01/17/measuring-amp-performance/"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"To speed-test an AMP page"),", click 'Open in new tab', copy the URL, and paste it in the relevant field of the ",(0,i.kt)("a",{href:"https://developers.google.com/speed/pagespeed/insights/",target:"_blank"},"Page Speed Insights site"),"."))),(0,i.kt)("h3",{id:"recaptchas-affect-on-page-speed"},"reCAPTCHA's affect on page speed"),(0,i.kt)("p",null,"In AMP pages, reCAPTCHA verification widget is added to any form whose reCAPTCHA verification is turned on in the form's settings."),(0,i.kt)("p",null,"Since the reCAPTCHA widget is not native to AMP, it can lower the page seeed score. To get the most of your AMP pages, it is highly recommended to ",(0,i.kt)("strong",{parentName:"p"},"deactivate reCAPTCHA")," for forms in pages that are ampified. ",(0,i.kt)("a",{parentName:"p",href:"/docs/widgets#contact-form"},"See instrucionts")))}u.isMDXComponent=!0}}]);