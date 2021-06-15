---
id: page_speed_test
title: Page Speed Test
sidebar_label: Page Speed Test
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

For AMP pages, **speed test is not fully representative** of the actual speed of the page.
<img  width='500px' src={useBaseUrl('speedbeforeafter.png')} />

Currently, web speed tests are conducted in the same manner for all webpages, wether they're built in plain HTML, or in AMP. However AMP derives much of its speed from two factors, **none of which is taken into consideration** in the simple speed tests:

**AMP Cache**
* AMP pages are served by Google after being cached on Google's servers, optimized (images resize, prefetch hints, minify html, etc.), and distributed to Google’s Content-Delivery-Network (CDN). These measures significantly improve site speed.
* **What happens in the Speed Test**: The test loads the page directly from our servers (even if the server is on the other side of the world)without usage of the CDN. The loaded pages are also lacking the added optimization which they undergo once being cached.

**Page Pre-loading**
1. AMP pages are pre-loaded to the visitors devices before they click on the site link in Google's search results. This means that when the click takes place - the page appears in an instant, as it's already loaded in the background.
2. The heaviest component that is being downloaded in the AMP page speed test is a component called 'AMP runtime', which is like the AMP page’s operating system. However in reality, almost all the visitors already have this component in their device from previous visits to AMP pages. 

    Both these factors greatly reduce the LCP (Largest Contentful Paint), and the FCP (First Contentful Paint), which are two of the most significant factors for a hight Core-Web-Vitals score.

* **What happens in the Speed Test**: In web speed tests, all the page's components are fully downloaded + no preloading takes place.

The result is that a page speed score of 67 can actually be, with real life data, above 90.

<img className="shadow" width='600px' src={useBaseUrl('Speedtestbefore.png')} />
<br/>
<img className="shadow" width='600px' src={useBaseUrl('Speedtestafter.png')} />

* More about the data Google displays in the Speed Test: <a href="https://developers.google.com/speed/docs/insights/v5/about#faq" target="_blank">developers.google.com/speed/docs/insights/v5/about#faq</a>
* More about the issues of measuring AMP page speed: <a href="https://blog.amp.dev/2018/01/17/measuring-amp-performance/" target="_blank">blog.amp.dev/2018/01/17/measuring-amp-performance/</a>




  