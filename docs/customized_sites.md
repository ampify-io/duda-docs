---
id: customized_sites
title: Customized sites & Apps
sidebar_label: Customized Sites & Extensions
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

<h4> Ampify was set up to support the editor widgets and their respective range of in-editor custimizations.</h4>

### HTML and CSS Customization

A site's HTML or CSS can be manually edited via the Editor's Developer Mode, or via each individual widget's 'Edit HTML/CSS' option. Ampify will try to create the AMP version based of the customized code. Most times it will manage to digest the changes and create the Identical AMP version. Many times, however, discrepencies might surface. These can heppen in cases where the changes are more significant or when the changes contradict the defult AMP creation logic.

   <img className="shadow" width='400px' src={useBaseUrl('devwindow.png')} /> <img className="shadow" width='100%' src={useBaseUrl('devmode.png')} />

When ampifying a cusomized page, **Ampify can't tell if changes were made to the page's HTML/CSS**, hence the page will be ampified normally. It is important that a proper review of the page's desgin would take place prior to approving it. The review should be more particular for the page's componenets which were manually customized. 

### JS Customization
AMP doesn't support Java Scripts in the same way HTML does. When scripts are manually edited or entered into a webpage, they **will not work in the AMP version**. When ampifying a cusomized page, **Ampify can't tell if custom scripts were created**, hence the page will be ampified normally. Particular review is required on the expected scripted behhaivior prior to approving the AMP page to go live.

### Custom HTML Widget
<img className="" width='50px' src={useBaseUrl('customhtmlwidget.png')} />

Similar to manual cusomization of specific widgets or the entire site, Custom HTML widget contains code which was manually added to the page. The same restrictions apply to that code as described in the previous sections. Unlike other types of customization, when a Custom HTML widget is used in a page - Ampify requires a specifc review and approval of the widget in order to enable the publish of the AMP page.

### Custom Widgets

Placeholder
### 3rd Party Apps
3rd party apps referes to any external tool which is implemented in the site, and is not an Editor widget or an app-store app. The same restrictions apply to that code as described in the previous sections. Many external tools already have AMP specific support, which is usually associated with a different tag to be used in the site. If the HTML version of the widget doesn't work in the Ampified page, check with your provider for their support in AMP.

### Appstore Apps
Ampify doesn't support 3rd-party apps which utilize scripts in the HTML page.
If you are an app developer and you'd like your app to be supported in Ampfied pages, reach out to us at help@ampify.io.

<img className="shadow" width='400px' src={useBaseUrl('appsote.png')} />