---
id: analytics
title: Analytics
sidebar_label: Analytics
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

## Built-in Analytics
All AMP analytics data is available in the Editor analytics dashboard as an integratl part of the site analytics. The AMP pages are measured like the source pages, so do the events.
To separate the AMP pages in the reports, filter them using the term “amp=true”.
* Known discrepancies:
    * Form Submit event is triggered at the ‘submit’ click event, and not at the end of the submission flow.

## Custom Analytics Tools
Custom Analytics refers to all cases where a different analytics tool is used, apart from Editor built-in analytics. These tags are usually integrated into your site from the *Settings > Google-Analytics* path, or more directly from the *Settings > Head HTML*
<img className="shadow" width='600px' src={useBaseUrl('Settings_Google-Analytics.png')} />
<br/>
<img className="shadow" width='490px' src={useBaseUrl('Settings_Head_HTML.png')} />

### Google Analytics
* AMP is enabled by default for all Universal-Analytics properties which are integrated into your site (Universal-Analytics properties are identified by their ID structure: ```UA-xxxxxx-x```). Similar to the Editor Analytics dashboard, AMP pages views and events appear in the site's Google Analytics dashboard.
#### GA4 and Global Analytics
* Google Analytics’ latest version, GA4, is based on a different analytics tag (Global Analytics Tag, which looks like this: ```GA-xxxxx-x```). These tags are not yet supported in AMP. If you’re using Global Analytics for your site, and you’d like to monitor your AMP pages, you can choose either of the following options:
  
  * **Option 1: Create a Universal-Analytics property**:<br/>
    * In your Google Analytics dashboard, create a Universal Analytics property and integrate it into your site. Existing GA4 properties cannot be converted to AU properties - the AU property needs to be created as a new property. <a href="https://support.google.com/analytics/answer/10269537?hl=en" target="_blank">Instructions for integrating Universal Analytics tag</a>.
    * It is possible to integrate the tag either from *Settings > Google-Analytics* (using just the ```UA-xxxxx-x``` ID) or *Settings > Head HTML* (using the full UA analytics tag).
    * If you choose to integrate both the Global Analytics tag and alongside it the Universal Analytics tag, the Global Analytics dashboard will show data only for the HTML version of the page (and not the AMP data), while the Universal Analytics dashboard will show **all** data (both HTML version and AMP).<br/><br/>

  
  * **Option 2: Use ‘Source’ (less accurate)**:
    * If you don’t integrate a UA analytics tag, and you’re using the Google Analytics dashboard, you can gain insights about the AMP activity via the ‘Source’ section of your Google Analytics dashboard:
    * Traffic that sources from AMP pages will be marked with ```amp=true``` in the URL. Note that this method **will not provide an accurate representation** of the number of visits to the AMP site. The reason is that an AMP page will only be registered as a source if a visitor will move from the AMP page (which is the first page the visitor visits) to a 2nd page (which will already be the HTML version of the site). Visitors that will interact only with the AMP page, without moving on the the 2nd page, will not be registered in Google Analytics.
### Google Tag Manager
* Google Tag Manager (GTM) has built-in support for AMP. In order to activate it, <a href="https://support.google.com/tagmanager/answer/9205783?hl=en" target="_blank">follow these instructions to create an AMP container</a>. In your AMP container, connect the Google Analytics tag and any other AMP-supported tags, just like you would for the HTML container.
* To add the tag to the AMP version, integrate it into the *HTML site* according to the instructions [linked above](#custom-analytics-tools)
, via *Settings > Head HTML*. The tag will have no effect on the HTML page.
* Note that Google Analytics tags which are integrated to your site using Google Tag Manager adhere to the same requirements and restrictions as Google Analytics tags which are integrated directly into the site (e.g. GA4 restirctions apply whether the GA4 tag is integrated to the site directly or via Google Tag Manager).

### Adwords
* Adwords conversions are tracked via the Google Analytics implementation.
### Other Analytics providers
Many Analytics providers have AMP support. To use it, the AMP page requires an AMP specific tag. Follow your provider’s instructions to create that tag (if applicable), or find the relvant tag in the <a href="https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/configure-analytics/analytics-vendors/?format=websites" target="_blank">AMP project site</a>. Integrate the tag via *Settings > Head HTML* according to the instructions [linked above](#custom-analytics-tools). The AMP tag won’t be used in the HTML version - only the AMP version will integrate it.
## Bounce Rate Discrepencies
In Analytics, Bounce Rate is almost alwasy registered as high, even though it is not. The reason is that AMP pages are host on the Google domain. When a visito lands on an AMP page and then cnotinues to the HTML version of the page - the analytics registers this 'exit' of the AMP page as a bounce, even though the opposite is true. The bounce rate measurement is the only inidicator that is affected by this glitch. Learn more in <a href="https://support.google.com/analytics/answer/9264222?hl=en#:~:text=Bounce%20rate%20comparisons
" target="_blank">Google</a> and in a more in-depth <a href="https://www.christianoliveira.com/blog/en/web-analytics/why-the-bounce-rate-of-my-amp-pages-is-so-high/" target="_blank">article</a>

## Support
AMP analytics is a complex subject - if you have any question or require any help, reach out to us at help@ampify.io.
