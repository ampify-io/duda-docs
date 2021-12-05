---
id: resolve_inaqequate
title: " "
sidebar_label: Resolve AMP Inadequate
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

<img className="shadow" width='150px' src={useBaseUrl('StatusAmpValidationIssue.png')} />

### Why is this happening?

 AMP pages have to abide by a strict set of rules to be considered AMP valid and enjoy the AMP benefits. The most common AMP validation issue is a CSS file which exceeds 75kb in size. This usually happens on three types of web pages:

1. Pages that have a high number of different widgets
2. Pages that have high levels of customization (e.g. multiple SVG images, or multitude of elements that have varying CSS properties).
3. On some occasions, pages with 3rd party tools that have a heavy CSS payload.

More technically, the more selectors a CSS file has, and the more variance there is between those selectors, the higher the probability is for a CSS to to be heavier than the 75kb allowed. Most pages don't reach this level of complexity - but if a page does reach it, your options are as follows: 

## Ways to Resolve AMP Inadequate
If skipping the AMP version for the specific inadequate page isn't an option, the following options may help:
[removal of unused elements](#removal-of-unused-elements) or [exclusion of popups from the AMP page ](#exclusion-of-popups-from-the-AMP-page )

### Removal of unused elements 
removal of unused elements is the way to make the page lighter. This can be achieved in two ways:
1. #### **Hide the elements from the mobile version of the Duda site**: 
AMP is based on the mobile version - so setting an element to be hidden in mobile will also hide it in the AMP version. 

<img className="higher" width='310px' src={useBaseUrl('hide_on_mobile.png')} />


2. #### **Hide the elements only from the AMP version**: 
For elements that you want to hide only in the AMP version (while keeping them visible in the mobile HTML page) - add the following attribute to the element via the 'edit HTML' option: "amp_hide".

<img className="higher" width='600px' src={useBaseUrl('amp_hide_attribute.png')} />

After the removal, republish the site and update the AMP page to see if it turns valid.

### Exclude popups from AMP page 
Many times, popups and their contents can significantly contribute to the size of a page's CSS. 
Excluding a popup from an AMP page will mean that following a click on an element that opens a popup, the relevant popup will open as a new page. For pages that have a high number of popups, this may **enable them to pass validation without changing the structure of their page**. 

To exclude a popup from a page, edit the HTML of the element that opens the popup (e.g. a button). Add a new attribute: _"popup_amp_exclude"_.
 
The change only affects the specific instance of the popup - if it loads from other buttons of the page, the CSS will most likely not change. Similarly, if the popup is available from other pages - it will open as a popup in those pages. 
<img className="higher" width='600px' src={useBaseUrl('popup_amp_exclude.png')} />

After the change, republish the site and update the AMP page to see if it turns valid.


