---
id: resolve_inadequate
title: " "
sidebar_label: AMP Inadequate
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

<img className="shadow" width='150px' src={useBaseUrl('StatusAmpValidationIssue.png')} />

### Why is this happening?
<details>
 <summary>AMP pages have to abide by a strict set of rules to be considered AMP valid and enjoy the AMP benefits. (expand to learn more)</summary> The most common AMP validation issue is a CSS file which exceeds 75kb in size. This usually happens on three types of web pages:

1. Pages that have a high number of different widgets
2. Pages that have high levels of customization (e.g. multiple SVG images, or multitude of elements that have varying CSS properties).
3. On some occasions, pages with 3rd party tools that have a heavy CSS payload.

More technically, the more selectors a CSS file has, and the more variance there is between those selectors, the higher the probability is for a CSS to to be heavier than the 75kb allowed. Most pages don't reach this level of complexity - but if a page does reach it, your options are as follows: 
</details>

## Ways to Resolve AMP Inadequate

### Option 1: Exclude popups from AMP page 
This means that the relevant popup will open as a new page (returning to page from the popup is possible via the 'back' button). 
Excluding popups can enable AMP pages to pass validation **without changing the page structure**. This is especially true for pages with many popups.

1. #### Exclude all popups:

    <details>To exclude all the site's popups, copy-paste the following code to the Head HTML via your Duda dashboard.

    ```
        <script type="text/javascript">
        window.popup_amp_exclude = ["exclude_all_popups"]
        </script>
    ```  
    <img className="shadow" width="600px" src={useBaseUrl("add_html_to_head.png")} /> </details>



2. #### Exclude specific popups:

    <details>To exclude specific popups across all AMP pages, follow the instructions to exclude all popups. This time, replace the "exclude_all_popups" value with the name of the popups to exclude, comma seperated. Make sure to use the percise name of the popup as it appears in the Duda dashborad.

    ```jsx
        <script type="text/javascript">
        window.popup_amp_exclude = ["popup_name#1","popup_name#2"]
        </script>
    ```
    </details>


3. #### Exclude a specific popup from a specific page:

    <details><p>Via the Duda dashboard, edit the HTML of the element that opens the popup (e.g. a button). Add a new attribute: _"popup_amp_exclude"_ (see screenshot). If the popup is triggered by multiple elemetns in the page, do this for each one of them.</p>
    <img className="higher" width='600px' src={useBaseUrl('popup_amp_exclude.png')}/></details>

After the change, republish the site and update the AMP page to see if it turns valid.

### Option 2: Remove unused elements 
Removal of unused or non-critical elements can reduce CSS load. This is particularily true for 3rd party widgets:
1. #### Hide elements from the mobile version of the Duda site: 
    <details><p>AMP is based on the mobile version - so setting an element to be hidden in mobile will also hide it in the AMP version.</p>

    <img className="higher" width='310px' src={useBaseUrl('hide_on_mobile.png')} /></details>


2. #### Hide elements only from the AMP version: 
    <details><p>For elements that you want to hide only in the AMP version (while keeping them visible in the mobile HTML page) - add the following attribute to the element via the 'edit HTML' option: "<b>amp_hide</b>".</p>

    <img className="higher" width='600px' src={useBaseUrl('amp_hide_attribute.png')} /></details>

After the removal, republish the site and update the AMP page to see if it turns valid.
