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

Pages get a 'draft' status in two cases:
1. Pages whose HTML version was not published. Following the publish of these pages, their status will change in Ampify.
2. Pages that are set to **'no-index'**. To resolve - turn off the 'no-index' toggle button (See image) and republish the site.  

<img className="" width='350px' src={useBaseUrl('noindex.png')} />

### Pending Approval
<img className="higher" width='120px' src={useBaseUrl('StatusAwaitingApproval.png')} />

The AMP version is awaiting to be approved. AMP pages may have differences compared to the source HTML page: there is limited support for 3rd party scripts, and sites with customized source code can cause the AMP page to not look or behave like the source. Proper review of the page before publishing it is important to make sure no malfunctioning or broken element will be included in it.

### Skipped
<img className="higher" width='80px' src={useBaseUrl('statusSkipped.png')} />

A page which was skipped will not get an AMP version.

### Creating/Converting
<img className="higher" width='130px' src={useBaseUrl('creatingAMP.png')} />

The AMP page is being generated. During this process, we crawl the HTML page and use Ampify's AI to convert each element in the page to an AMP camptible that will be near identical to the source. We also flag elements which might require specific review by you in order for the page to go live.

The creation of a web page should last no more than a few minutes. If a page is stuck at this status please contact us to solve the issue.

<h3><a aria-hidden="true" tabindex="-1" class="anchor" id="amp-validation-issue"></a><a class="hash-link" href="#amp-inadequate" title="Direct link to heading">#</a></h3>

### AMP Inadequate
<img className="higher" width='140px' src={useBaseUrl('StatusAmpValidationIssue.png')} />

**[→ Ways to Resolve AMP Inadequate](/docs/resolve_inadequate#ways-to-resolve-amp-inadequate)**

 AMP pages have to abide by a strict set of rules to be considered AMP valid and enjoy the AMP benefits. The most common AMP validation issue is a CSS file which exceeds 75kb in size. This usually happens on three types of web pages:

1. Pages that have a high number of different widgets
2. Pages that have high level of customization (e.g. multiple SVG images, or multitude of elements that have varying CSS properties).
3. On some occasions, pages with 3rd party tools that have a heavy CSS payload.

More technically, the more selectors a CSS file has, and the more variance there is between those selectors, the higher the probability is for a CSS to to be heavier than the 75kb allowed. Most pages don't reach this level of complexity - but if a page does reach it, your options are as follows: 



### Failed
<img className="higher" width='60px' src={useBaseUrl('StatusFailed.png')} />

Something went wrong during the creation process. Try to update the AMP page by clicking the update icon, and if the problem persists please reach out to with the page URL at help@ampify.io.

### Awaiting Publish
<img className="higher" width='130px' src={useBaseUrl('statusAwaitingPublish.png')} />

The page requires the republishing of the site to go live.

### Awaiting Upgrade
<img className="higher" width='130px' src={useBaseUrl('Upgrade_required.png')} />

The page will go live once once you'll upgrade to a plan that enables more AMP pages. For example, if during your free trial you have gone live with 8 pages, and following the end of the free trial you have chosen the 'Basic' plan which enables up to 5 AMP pages - the bottom 3 pages will change status to 'upgrade required'. When you'll then upgrade to the next plan, which enables up to 15 AMP pages - the 'Upgrade Required' status will change back to 'Live'.
