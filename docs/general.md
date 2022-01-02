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
* Whenever a page is selected to be ampified, all its language versions get ampified as well. 
* Multiple language versions of a page are all counted as one for the purpuse of your ampify plan page limit. For example, a site that has 5 language versions and is in the Ampify Basic plan can ampify one of its pages. Each one of the 5 different language versions of that single page will also be ampified.
* For languages which are not the site's default language, access to their AMP version is not possible via the application. The AMP version can be accessed from the site itself, by adding '?amp=true' to the end of the page URL.
* Languages variations - variations of the same language are considered as a single language. E.g. *English US* and *English UK* are both treated as English, and their AMP version will be the same version.
* Pages whose URL includes the same abbreviation as one of the site's supported languages will not appear in the list of pages and cannot be ampified. For instance, a site, whose one of its supported languages is Italian (it), and has a page with the URL https://www.example-site.com/**it**/learn-how-it-people-solve-your-computer-problems - the page URL includes "/it", and it will not be available for ampification.To overcome this issue, consider modifying the URL so the language abbreviation will not be included in it. for example: https://www.example-site.com/**i-t**/learn-how-it-people-solve-your-computer-problems.
### Personalization
#### Auto-popup 
Popups that show up to all visitors will also appear in the AMP version. Any delay that is imposed on these popups is removed in the AMP version. Popups with a delay of more than 10 seconds are not supported. 
#### Notification Bars
The default for Notification Bars is that they don't show up in the AMP page.  
Ampify supports two ways to enable notification bar:
1. __Show notification only once__:  
This can be usuful for use cases such as cookie consent notice, or any other message you only wish to show once. To do that, paste the following script in the head HTML via your Duda dashboard.
   
    <script> var amp_keep_notifications_only_once = true </script>
    
2. __Show notification all the time__:  
This means the notification will show up as part of the site, and the user will have the option to hide it using the 'x' button.

    <script> var amp_keep_notifications = true </script>  
<img className="shadow" width="600px" src={useBaseUrl("add_html_to_head.png")} />


#### Expected Behaivior 
In the HTML version the personalization rules continue to behave as expected, and will be applied to any visitor that lands in your site from the AMP page. For example, in a site that has an automatic welcome popup which is triggered for all visitors - a visitor which lands on an AMP page will not get that popup. Once the visitor will move from the AMP page to a different page in the site - that page will already be the HTML version (and not the AMP version). If the welcome popup is defined to be triggered in all the pages of a site - it will popup for the visitor.
### Dynamic Mode Pages
* Dynamic Mode Pages are supported. They appear under Blog Posts section.

## Progressive Web Apps (PWA)
PWA is a type of site that can be downloaded in some mobile browsers and devices. PWA is not compatible in AMP pages - so if you have a PWA banner in your site - it will not appear in the AMP page (it will continue to appear as usual in your source HTML pages)
