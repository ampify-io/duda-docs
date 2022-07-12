---
id: search_console
title: Resolve Search Console Errors
sidebar_label: Search Console Errors 
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 


Following the initial AMP setup it is not uncommon for Google Search Console to notify about an issue detected on an AMP page:
<img className="shadow" width='490px' src={useBaseUrl('search_console_warning.png')} />

#### First, note this doesn't affect the page appearance or search ranking: 
Whenever an AMP page has a Search Console error, Google will fallback to display the source HTML page, without repercussions. Once the issue is resolved, the AMP will take back its natural place. 

Due to the dynamic architecture of serving AMP pages, it is not uncommon to experience some Search Console errors - it shouldn't be a cause for alarm. Most errors are temporary, and the others can be easily fixed with a few simple steps explained below.

### Resolve Search Console Errors
1. Click the error message in the Search Console.
<img className="shadow" width='490px' src={useBaseUrl('SearchConsoleError0.png')} />

2. Find a URL the error takes place at. Make sure the path "/ampify" is part of the URL.
<img className="shadow" width='490px' src={useBaseUrl('SearchConsoleError1.png')} />

3. Click to open the AMP page in a new tab. The URL should redirect you to a new URL ```convert.ampify.io/builders/d?s=...```.
    * If you were redirected and the AMP page shows up as expected: it means there was most likely an issue that temporarily prevented the Google Bot from reaching the AMP page. Click "Validate Fix" (see 1st image in this page).
    * If you were not redirected, and instead reached a 404 page, or if you were redirected but a message shows up: ```{"message":"page ... ... is not on the valid published list ....}```, follow these steps in your Ampify dashboard:
        1. Skip the page (see image below).
        2. Republish your site.
        3. Re-approve the page.
        4. Republish your site again.
        5. Open the URL again. The AMP page should show up. Click "Validate Fix" (see 1st image in this page). If the page doesn't show up, contact us in the support tab.  

        <img className="shadow" width='490px' src={useBaseUrl('skipapprovepage.png')} />
* Most times the error message will be ```Server Error (5xx)```. If you get a different type of error, contact us in the support tab.


