---
id: page_speed_test
title: Page Speed Test
sidebar_label: Page Speed Test
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

### Speed testing AMP pages
For AMP pages, **speed test is not fully representative** of the actual speed real visitors experience.
<img  width='500px' src={useBaseUrl('speedbeforeafter.png')} />

Currently, web speed tests are conducted in the same manner for all webpages, wether plain HTML, or in AMP. However AMP derives much of its speed from two factors, **none of which is taken into consideration** in the simple speed tests:

**AMP Cache**
* AMP pages are served by Google after being cached on Google's servers, optimized (images resize, prefetch hints, minify html and CSS, etc.), and distributed to Google’s Content-Delivery-Network (CDN). These measures significantly improve actual site speed.
* **What happens in the Speed Test**: The test loads the page directly from Ampify's servers (even if the server is on the other side of the world) without usage of the CDN to load the page from a nearby server. The loaded pages are also lacking the added optimization which they undergo when being cached.

**Page Pre-loading**
1. AMP pages are pre-loaded to the visitors devices before they click on the site link in Google's search results. This means that when the click takes place - the page appears in an instant, because it's already loaded in the background.
2. The heaviest component that is being downloaded in the AMP page speed test is a component called 'AMP runtime', which is like the AMP page’s operating system. However in reality, almost all the visitors already have this component in their device from previous visits to other AMP pages.

* **What happens in the Speed Test**: In web speed tests, all the page's components are fully downloaded + no preloading takes place. These factors reduce the LCP (Largest Contentful Paint), and the FCP (First Contentful Paint), which are two of the most significant factors for a high Core-Web-Vitals score.

The result is that a page speed score of 67 can actually be, with real life data, above 90.

<img className="shadow" width='600px' src={useBaseUrl('Speedtestbefore.png')} />
<br/>
<img className="shadow" width='600px' src={useBaseUrl('Speedtestafter.png')} />

<br/><br/>

* More about the data Google displays in the Speed Test: <a href="https://developers.google.com/speed/docs/insights/v5/about#faq" target="_blank">developers.google.com/speed/docs/insights/v5/about#faq</a>
* More about the issues of measuring AMP page speed: <a href="https://blog.amp.dev/2018/01/17/measuring-amp-performance/" target="_blank">blog.amp.dev/2018/01/17/measuring-amp-performance/</a>

### reCAPTCHA's effect on page speed

In AMP pages, reCAPTCHA verification widget is added to any form whose reCAPTCHA verification is turned on in the form's settings.

Since the reCAPTCHA widget is not native to AMP, it can lower the page seeed score. To get the most of your AMP pages, it is highly recommended to **deactivate reCAPTCHA** for forms in pages that are ampified. [See instrucionts](/docs/widgets#contact-form)




  