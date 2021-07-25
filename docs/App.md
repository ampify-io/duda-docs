---
id: App
title: Page Statuses
sidebar_label: Page Statuses
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 


### Live 
<img className="higher" width='40px' src={useBaseUrl('statusLive.png')} />

The ampified version was approved and was deployed to the site. Even though the AMP page was deployed, it usually takes some time for Google to pull the updated AMP version to its AMP cache, and begin serving it to visitors. To expedite this process, click on the 're-indexing' button in your site’s Google Search Console.

### Draft Page
<img className="higher" width='90px' src={useBaseUrl('StatusDraftPage.png')} />

These are pages whose HTML version was not published. Following the publish of these pages, their status will change in Ampify.

### Pending Approval
<img className="higher" width='120px' src={useBaseUrl('StatusAwaitingApproval.png')} />

The AMP version is awaiting to be approved. AMP pages may have differences compared to the source HTML page: there is limited support for 3rd party scripts, and sites with customized source code can cause the AMP page to not look or behave like the source. Proper review of the page before publishing it is important to make sure no malfunctioning or broken element will be included in it.

### Skipped
<img className="higher" width='80px' src={useBaseUrl('statusSkipped.png')} />

A page which was skipped will not get an AMP version.

### AMP Validation Issue
<img className="higher" width='140px' src={useBaseUrl('StatusAmpValidationIssue.png')} />

 AMP pages have to abide by a strict set of rules to be considered AMP valid and enjoy the AMP benefits. The most common AMP validation issue is a CSS file which exceeds 75kb in size. This usually happens on three types of web pages:

1. Pages that have a high number of different widgets
2. Pages that have high level of customization (e.g. multiple SVG images, or multitude of elements that have varying CSS properties).
3. On some occasions, pages with 3rd party tools that have a heavy CSS payload.

The more selectors a CSS file has, and the more variance there is between those selectors, the probability for a CSS to be higher than 75kb goes up. The only way to solve this issue is by removing unused elements from the HTML version itself. 

### Failed
<img className="higher" width='60px' src={useBaseUrl('StatusFailed.png')} />

Something went wrong during the creation process. Try to update the AMP page by clicking the update icon, and if the problem persists please reach out to with the page URL at help@ampify.io.

### Awaiting Publish
<img className="higher" width='130px' src={useBaseUrl('statusAwaitingPublish.png')} />

The page requires the republishing of the site to go live. 
