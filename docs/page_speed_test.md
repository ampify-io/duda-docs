---
id: page_speed_test
title: Page Speed Preview
sidebar_label: Page Speed Preview
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

:::note Summary

 Google's Page Preview tool provides a visual way to experience the increased speed of AMP pages. It compelements Google's <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Page Speed Insights</a>, which does not take into considiration factors that facilitatae the AMP speed, leading to subpurb scores compaerd to reality.

:::
<a href="https://storage.googleapis.com/duda-ampify-app/static%20marketing/AMP%20sped%20simulation.mp4"><img  width='600px' src={useBaseUrl('speedgif.gif')} /></a>
<br/>
<br/>

### Previewing the speed of an AMP page
The AMP Page preview isllustrates the way an AMP page would show up in Google's search results. Unlike traditional web speed tests, the preview tool facilitates the pre-loading of the AMP, which provides a way to experience how fast it really is.

**AMP page title:** the preview presents the following title : _sbsites.ampify.io_. This is only for the preview - the actual title will be the domain of the website. 

<img  className="shadow" width='300px' src={useBaseUrl('previewtitle.png')} />


### Traditional Speed tests can be inaccurate for AMP

Web speed tests like <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Page Speed Insights</a> are conducted in the same manner for all webpages, wether plain HTML or AMP. However AMP derives much of its speed from two factors, **none of which is taken into consideration** in plain speed tests:

1. **AMP Cache**
    * **How it improves speed**: AMP pages are served by Google after being cached on Google's servers, optimized (images resize, prefetch hints, minify html and CSS, etc.), and distributed to Google’s Content-Delivery-Network (CDN). These measures significantly improve actual site speed.
    * **What happens in the Speed Test**: The test loads the page directly from Ampify's servers (even if the server is on the other side of the world) without usage of the CDN to load the page from a nearby server. The loaded pages are also lacking the added optimization which they undergo when being cached.

2. **Page Pre-loading**
    * **How it improves speed**: AMP pages are pre-loaded to the visitors devices before clicking to open it. When the click takes place - the already loaded page appears in an instant. **Plus**, The heaviest component of an AMP page is shared across all AMP pages. Most visitors already have it in their device from previous visits to other AMP pages - it is not downloaded for each site.

    * **What happens in the Speed Test**: In web speed tests, all the components are fully downloaded + no preloading takes place. These factors reduce the LCP (Largest Contentful Paint), and the FCP (First Contentful Paint), which are two of the most significant factors for a high Core-Web-Vitals score.

    The result is that a page speed score of 67 can actually be, with real life data, above 90.

    <img className="shadow" width='600px' src={useBaseUrl('Speedtestbefore.png')} />
    <br/>
    <img className="shadow" width='600px' src={useBaseUrl('Speedtestafter.png')} />

    <br/><br/>

    * More about the data Google displays in the Speed Test: <a href="https://developers.google.com/speed/docs/insights/v5/about#faq" target="_blank">developers.google.com/speed/docs/insights/v5/about#faq</a>
    * More about the issues of measuring AMP page speed: <a href="https://blog.amp.dev/2018/01/17/measuring-amp-performance/" target="_blank">blog.amp.dev/2018/01/17/measuring-amp-performance/</a>

    **To speed-test an AMP page**, click 'Open in new tab', copy the URL, and paste it in the relevant field of the <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Page Speed Insights site</a>.


### reCAPTCHA's affect on page speed

In AMP pages, reCAPTCHA verification widget is added to any form whose reCAPTCHA verification is turned on in the form's settings.

Since the reCAPTCHA widget is not native to AMP, it can lower the page seeed score. To get the most of your AMP pages, it is highly recommended to **deactivate reCAPTCHA** for forms in pages that are ampified. [See instrucionts](/docs/widgets#contact-form)





  