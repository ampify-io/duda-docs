---
id: about_amp
title: About AMP
sidebar_label: About AMP
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 


## What is AMP
<img className="lower" width='90px' src={useBaseUrl('ampicon.png')}/>

Accelerated Mobile Pages (AMP) is a lightweight version of your site, designed to give mobile visitors a lightning-fast, smooth and engaging experience. AMP maximizes your Core Web Vitals score, providing better SEO and a 30% increase in search traffic on average. AMP pages receive the desired ‘accelerated-page’ badge ⚡ in the search results and are pre-loaded by Google, leading to a near-instant loading time.
<img  width='300px' src={useBaseUrl('AMPvisual.png')} />

## How AMP works
Once a page is Ampified, an AMP version of the page exists alongside the HTML version. Whenever Google indexes the HTML page, Google checks whether an AMP version exists for that page. This is done using a special tag which is placed in the page'a code when it is Ampified. 
Google then validates that the page meets all the restrictions which every AMP page must abide by in order to be valid. Only valid AMP pages enjoy from the benefits of page pre-loading, Google Cache acceleration, and the 'accelerated-page' badge.

**<a href="https://amp.dev/about/how-amp-works/" target="_blank">Learn more about AMP from Google</a>**

## The Ampify Process
1. When Ampify is installed, it immediately creates an AMP version for each of the site pages.
2. Once a page is reviews and approved, we insert a special tag called 'amphtml' to the page's code. This tag lets Google know that an AMP version exists for the page. At this point, even though the AMP page is ready, it is not accessible to the site visitors.
3. Once Google indexes the webpage (which it does on a regular basis), once of the hunderds of actions it performs is to read the amphtml tag, and follow it to the Ampified version of the page. 
4. Google makes sure that the AMP page is valid, and if it is - it stores it optimizes it and stores it in the AMP cache.
5. From that moment on, whenever the page is showing up in the Google search results in mobile, Google will serve the Ampified version, with all its acceleration benefits.

## Updating an Ampified page
* Whenever Google indexes a webpage, Ampify updates the Ampified version and serves it to Google, which updates it in the AMP cache. 
* Manual updating of the Ampified page from within the dashboard is possible, however it can take up to several days to Google to also pull that version to its cache. This can cause a delay in the time it takes for Ampified pages to update. The actual delay depends on multiple factors, but the rule-of-thumb is that the more visits a page has - the more frequently it's updated.

One way to expedite this process is to click the re-index button in the site's search console.






