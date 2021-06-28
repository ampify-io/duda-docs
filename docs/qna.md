---
id: qna
title: Troubleshooting
sidebar_label: Troubleshooting
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

### Before you troubleshoot
* If you encounter an issue with an ampified page, first regenerate the ampified version by clicking the refresh icon (&#11118;) and see if the problem persists.
    * Some **widgets** can behave differently. A few widgets are not supported. See details in the [Widgets page](/docs/widgets).
    * Issues with **Analytics** can be addressed in the [Analytics page](/docs/analytics)

### Custom extensions
* Custom extensions which were created by an agency for its own use, require set up to be supported in AMP. [Read more](/docs/customized_sites#custom-html-widget).

### Known issues
* Unsupported templates:
    * Barber Shop
    * Digital Agency
    * CREATIVE AGENCY (AMP created but is invalid. Soon to be solved.)
    * PHOTOGRAPHER PORTFOLIO (AMP created not accurately. will be solved soon)

### Troubleshooting:
If a solution we provide doesn't work, reach out to us at help@ampify.io

* **I discarded an element, but it continues to appear in the AMP page**
    * Discarding an element triggers an updating of a webpage in the background. It should take a few minutes for the updated version to show up both in the preview window, and in the actual Ampified version. No further action is required. Note that like all AMP pages - it make take longer for Google to update the page in the AMP cache. 

* **Some or all of the blog posts pages are not listed in the dashboard's page list**
    * Republish your site.

* **I created an AMP page, but it doesn't behave/look like the HTML version**

    The first thing to do is to update the AMP page. If the problem persists, republish the site, and then update the AMP page again. If the  
    
    If the problem continu to persist, follow these steps, starting with identifing the issue:
    1. **A sepcific element doesn't behave as expected** (e.g. menu doesn't open):
        * Was this element's HTML/CSS directly edited?
            * Ampify can't guarantee the accurate Ampification of elements whose source code was tempered with. Please send us information about the issue: screenshots, URL for inspection, and number of sites affected to help@ampify.io.
        * Is the element a custom widget built by your agency?
            * Read more about [custom widget](/docs/customized_sites#custom-widgets)
    2. **Multiple elements don't look/behave as expected** (e.g. size of elements on the page is wrong, elements don't show up, elements' order is wrong, elements don't respond to user interactions)
        * Please reach out to us with a URL of the page for insepction + information about any customizations made to the site's CSS/HTML + other pages of the same site in which this problem takes place. 

* **Product or Post Search lead to a 404 page**
    * Product and Post search widget only work on sites with SSL, meaning that the site can be reached via http**s**://www.yousite.com. Your sites should have SSL by default. If it does not, enable it in the site settings (it can take up to 24 hours to turn active).

* **I uninstalled and reinstalled Ampify, and now the AMP page isn’t live**
    * Republish your site.

* **I opened an AMP page directly from the 'amphtml' tag, and I reached a 'Service Unavailable' page**
    * This is normal. It means that the AMP page is being updated. End users will never reach this page: the client of the 'amphtml' tag is Google Bot. When it gets this message, it knows to return in a few minutes and get updated page to store in the AMP cache.

* **I published a new blog post, but I can't see it in the dashboard**
    * Ampify requires a republish of the site in order to identify new blog posts. Click the republish button and you'll be able to see the page. 
* **I see blog posts in my Ampify dashboard, but they display a 404 notice**
    * There are situations in which blog posts exist, without the blog itself. This usually happens when a site was created from a template that had ready-to-use blog posts. Unless you will create a blog for the site, or hit 'republish' on the existing blog posts, these will remain 'shadow pages', which Ampify identifies and ampifies. Once a blog will be activated for the site, its posts will be ampified correctly. 


### Report a bug
We work hard to make the ampification of all sites falwless, but mistakes do happen. Let us know of any bug you find and we'll fix it asap.
Send us to help@ampify.io a description of the bug, a link to where we can see it, and if possible - a screen capture or screenshot.



