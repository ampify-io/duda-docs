---
id: general
title: General
sidebar_label: General
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

### Animations
* Site animations, i.e. ornamental elements which animate into their position as the user slides down the page, might appear differently in the AMP version. This is caused due to the manner in which Ampify interacts with each page as it records its design and elements. If this behavior leads to significant issues in your site, let us know at help@ampify.io.
### Hover Effects
* As hover can only take place in desktop, and AMP is intended for mobile devices, all hover effects are disabled.
### Multi-Languages
* Whenever a page is selected to be Ampified, all its language versions get Ampified as well. 
* Multiple language versions of a page are all counted as one for the purpuse of your Ampify plan page limit. For example, a site that has 5 language versions and is in the Ampify Free plan can Ampify one of its pages. Each one of the 5 different language versions of that single page will also be Ampified.
* For languages which are not the site's default language, access to their AMP version is not possible via the application. The AMP version can be accessed from the site itself, by adding '?amp=true' to the end of the page URL.
* Languages variations - variations of the same language are considered as a single language. E.g. *English US* and *English UK* are both treated as English, and their AMP version will be the same version.
### Personalization
* Personalization features are not enabled in the AMP version of a page. The reason is that for a site to be AMP valid, most of its behaviors need to be triggered by the visitor. This means that popups, snackbar notifications and other components which are automatically triggered cannot be triggered in the AMP version.
* In the HTML version - these personalization rules continue to behave as expected, and will be applied to any visitor that lands in your site from the AMP page. For example, in a site that has an automatic welcome popup which is triggered for all visitors - a visitor which lands on an AMP page will not get that popup. Once the visitor will move from the AMP page to a different page in the site - that page will already be the HTML version (and not the AMP version). If the welcome popup is defined to be triggered in all the pages of a site - it will popup for the visitor.
### Dynamic Mode Pages
* Dynamic Mode Pages are supported. They appear under Blog Posts section.
