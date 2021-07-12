---
id: customized_sites
title: Customized Sites, Widgets and Apps
sidebar_label: Customized Sites & Widgets
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

<h4> Ampify was set up to support the editor widgets and their respective range of in-editor custimizations.</h4>

### HTML and CSS Customization

A site's HTML or CSS can be manually edited via the editor's Developer Mode, or via each individual widget's 'Edit HTML/CSS' option. Ampify will try to create the AMP version based of the customized code. Most times it will manage to digest the changes and create an identical AMP version. Many times, however, discrepencies may surface. These can happen in cases where the changes are significant or when the changes contradict the defult AMP creation logic.

   <img className="shadow" width='400px' src={useBaseUrl('devwindow.png')} /> <img className="shadow" width='100%' src={useBaseUrl('devmode.png')} /><br/><br/>


When ampifying a cusomized page, **Ampify can't tell if changes were made to the page HTML/CSS**, hence the page will be ampified normally. It is important that a proper review of the page desgin would take place prior to approving it in the Ampify dashboard. The review should be more particular for the componenets which were manually customized. 

### 3rd Party Apps
3rd party apps referes to any external tool which is implemented in the site, and is not an Editor widget or an app-store app. The same restrictions apply to that code as described in the previous sections. Many external tools already have AMP specific support, which is usually associated with a different tag to be used in the site. If the HTML version of the widget doesn't work in the ampified page, check with your provider for their support in AMP.


### JS Customization
AMP doesn't support Java Script in the same way HTML does. When scripts are manually edited or entered into a webpage, they **will not work in the AMP version**. When ampifying a customized page, **Ampify can't tell if custom scripts were embedded**, hence the page will be ampified normally. Particular review of the expected scripted behhaivior is required prior to approving the AMP page in the Ampify dashboard.

### Custom HTML Widget
<img className="" width='50px' src={useBaseUrl('customhtmlwidget.png')} />

Similar to manual cusomization of specific widgets or the entire site, Custom HTML widget contains code which was manually added to the page. The same restrictions apply to that code as described in the previous sections. Unlike other types of customization, when a Custom HTML widget is used in a page - Ampify requires a specifc review and approval of the widget in order to enable the publish of the AMP page.

### Custom-Built Widgets

Ampify is setup to work with most of the Editor's built in widgets. If an you are trying to ampify a custom-built widget which you or your agency have developed on top of Duda, Ampify may require to set it up internally for it to function correctly in AMP pages. If you've tried to ampify your widget and it doesn't function properly, reach out to us at help@ampify.io.

### App store Apps
If you are an app developer, and your app utilizes scripts in the HTML page, Ampify may require to setup your app for it to function properly. Please reach out to us at help@ampify.io.

<img className="shadow" width='400px' src={useBaseUrl('appsote.png')} />