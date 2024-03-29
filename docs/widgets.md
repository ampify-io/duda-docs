---
id: widgets
title: Widgets
sidebar_label: Site Elements
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 

<p className="bigfont">Most of the editor widgets have an identical or near identical AMP version which is automatically used when a page is ampified. 
The following section details the expected behavior of each of the elements. In case there is a difference compared to the HTML version - it will be documented here.</p>

## Editor Widgets
### Accordion 
<img className="higher" width='50px' src={useBaseUrl('Accordion.png')} />

Accordion tabs open in a slightly smoother manner compared to the source.
### Before and After
<img className="higher" width='50px' src={useBaseUrl('Before_and_After.png')} />

* In the AMP version of Before and After, text labels appear as part of the image:
  * They can be slided upon. 
  * They don’t disappear.
* Arrows:
  * Arrows will have the same color as in the source. Their design is slightly different.
* Unlike the HTML version, AMP Before & After images don’t get cropped when the width of a screen is narrow - the component continues to match the visible width.
* When moving the slider, developers in the dev tool console will get an error notice: “Unable to preventDefault inside passive event listener invocation”. This is expected and doesn’t affect the element or the page.
### Blog Posts
<img className="higher" width='50px' src={useBaseUrl('Blog_Posts.png')} />

  * List Mode:
    * The width of the component can be a few pixels thinner compared to the HTML version.
    * If the element shadow is defined to be larger than the default, it might get slightly trimmed at its edges. 
    * On some occasions, the bottom-most element will have its bottom shadow trimmed.
    * The Load-more button always shows up, and will continue to show-up even after there are no more posts to display. When clicked it will not fetch new posts. 
    * On some occasions, the Load-more button might get slightly trimmed at its bottom edge due to variations in the component height in the visitors' different devices. This is fixed when the button is clicked.
  * Posts Slider Mode:
    * Similar to the Image Slider, the fade-in-out animation is presented in AMP as a sliding motion. This cannot be changed.
### Business Hours
<img className="higher" width='50px' src={useBaseUrl('Business_Hours.png')} />

* Business hours will show up as identical to the HTML version.
* Changes and updates to the dates will show up in the AMP version when Google reindexes the page 
* Special Dates:
  * Like the HTML version, Special Dates don’t show up until 2 weeks before the date.
  * Having said that, Special Dates will show up in the published AMP version only when Google re-indexes that version. This means that in the AMP version, special dates might show up later compared to the HTML version.
### Calendar
<img className="higher" width='50px' src={useBaseUrl('Calendar.png')} />

* Google Calendar must be associated with a public account, or the content of the frame will not be visible.
* The AMP version of the calendar is the Google default calendar. The content of the calendar is identical to the source. The calendar design can’t be edited. We are aware of the big gap in design compared to the source. Do we need to improve this feature? Let us know at help@ampify.io
### Contact Form
<img className="higher" width='50px' src={useBaseUrl('Contact_Form.png')} />

* **reCAPTCHA**:
  * If reCAPTCHA verification is turned on for a specific form, the AMP version of it will appear in the AMP page.
      <img  className="shadow" width='200px' src={useBaseUrl('recaptcha.png')} />
      
  * The reCAPTCHA badge is positioned at the bottom of the form, above the 'Submit' button. It can't be edited.
  * For a form-submit to be successful, the visitor is requested to check the ckeckbox. It is possible to send a form without checking the reCAPTCHA checkbox, however an error will show up.
  * AMP recaptcha may take a few seconds to load after the site is live.
  * AMP forms with reCAPTCHA verification require double tap on the 'submit' button. After the first tap, an icon appears on the Sumbit button, indicating the requirement for the 2nd tap. The visitor will receive the form submitted notification. 

      <img  className="" width='60px' src={useBaseUrl('clickagain.png')} />


  ### Deactivate reCAPTCHA to improve page speed
  
  reCAPTCHA in AMP can impact performance. It is recommended to switch off the reCAPTCHA verification in AMP by disabling it in the editor:
  * In the form settings, uncheck the 'Add reCAPTCHA validation' button. 

      <img className="shadow" width='500px' src={useBaseUrl('recaptcha_disable.png')} />

  * If the button is not available, it is possible to edit the code of the widget:
      in the settings menu, click 'Edit HTML/CSS'

      <img className="shadow" width='500px' src={useBaseUrl('recaptcha_settings.png')} />

      in the new window, set the captcha to 'false, click 'update', and republish the site.

      <img className="shadow" width='550px' src={useBaseUrl('recaptchaCSS.png')} />

    
* **Tracking Code**: Javascripts are not allowed in AMP, so any tracking code will not persist to the AMP version. Tracking is enabled in AMP via the Google-Tag-Manager, Google Analytics, and your Editor’s Analytics Dashboard.
* **File Upload**: at this stage, file upload is not supported in AMP.
* **Time and Date pickers**: time and date pickers have a predefined design which cannot be edited:
  * Time Picker:
    * Width: 40% of HTML's time picker width, minimum of 25% of screen width.
    * A click on the clock icon opens the time picker.
    * Time picker’s text placeholder doesn’t appear in the AMP version.
    * 24/12 hours format is dynamically determined per the visitor’s operating system preferences.
  * Date Picker:
    * Closing the date picker after selection is done via the ‘x’ button.
* **Required Fields**:
  * When a required field isn’t filled upon send, it will get a red border to indicate that it is required for the form to be submitted.
  * Checkboxes and Radio selectors display a red text indicating the required field, and not a red-border.
### Countdown
<img className="higher" width='50px' src={useBaseUrl('Countdown.png')} />

* 'Countdown is Over' message:
  * In the AMP version, when the counter reaches 0000, and after a three seconds delay, the Countdown is Over message will show up. The counter will be removed, even if the component was defined to show the message beneath the counter in the HTML version. 
  * When loading a page after the countdown has been completed, as the counter element is scrolled into view, the counter will first show the time passed since countdown over for a duration of three seconds, before the Countdown is Over message will show up.
  * A long Countdown is Over message might get trimmed by the bottom of the counter box - the counter box doesn’t change its height for long messages, and the message should be written and designed accordingly.
* Technical design aspects of the Countdown is Over Message in the AMP page:
  * Message line height is 1.2, even if defined otherwise.
  * Digits tiles with shadows: parts of the shadow might get trimmed at their far edges.
### Coupons
<img className="higher" width='50px' src={useBaseUrl('Coupons.png')} />

* New coupons and updates to existing coupons will be reflected in the AMP page after Google will re-index it.
* Expiration Date:
  * For cases where an AMP page was created or updated when a coupon was already expired, extending the coupons expiration date will be reflected in the AMP version when Google will reindex the page. Until then the cover expiration notice won’t show up, however clicking on its buttons won’t open the popups.
* We’re aware of an issue in which image coupons don't appear inside popups. This behaviour is the same as in the HTML page. Once it will be fixed in the HTML page - the fix will be reflected in the AMP page.
* Coupons Pop Ups:
  * Under certain circumstances, popup masks (the opaque overlay behind the popup window) may be opaque-white and not opaque-dark.
### Disqus
<img className="higher" width='50px' src={useBaseUrl('Disqus.png')} />

* Trusted Domains:
  * For the DIsqus widget to work on the AMP page, add ‘ampify.io’ to the list of trusted domain in your Disqus dashboard <a href="http://disqus.com/admin/settings/advanced/" target="_blank">advanced settings tab</a>.
* In cases where the Disqus widget is positioned in the top of the page, the widget will load partially collapsed, and will expand to reveal all comments when the user taps on the ‘Show All’ button.
### Facebook Feed
<img className="higher" width='50px' src={useBaseUrl('Facebook_Feed.png')} />

* The Facebook Feed element is identical to the source, with a single change: the height of the window cannot exceed 500px - if the HTML component has a height above 500px - the AMP component will be set to 500px.
### Header

Site header is identical to the source. For headers which change on scroll:
* For cases where the logo image changes on scroll, if that image is heavy it might cause irregularities in the header behavior. To fix, update the AMP page. 
* Menu Hamburger icon color doesn’t change on scroll. 
### Main Menu

* Sometimes sites define the Humburger Icon to change color on scroll. On the AMP version, the icon color doesn't change.
* Occasionaly, if the menu is long and reaches below the fold (i.e. below the bottom of the device screen), scrolling down might not act on the menu. If you encounter this issue, please reach out to help@ampify.io.
### Map
<img className="higher" width='50px' src={useBaseUrl('Map.png')} />

  * In AMP pages, the map is a Google Map, instead of the HTML version’s Mapbox.
  * Location name tooltip (named ‘popup’ in the editor) is replace with a fixed tile at the corner of the map.
  * AMP maps do not support map layouts which differ from the default.
  
  ### Media Slider
<img className="higher" width='50px' src={useBaseUrl('media_slider.png')} />
  * In AMP pages, Madia Slider's fade in and out transition is not supported. Sliders with fade in/out can't be converted to AMP (they will show as a static image).
  * Autoplay is turned on by default. To disable, add an HTML attribute to the element (<a href="https://support.duda.co/hc/en-us/articles/360061888273-Using-HTML-and-Custom-Code#:~:text=To%20edit%20the%20code%20of,the%20code%20you%20are%20editing." target="_blank">via edit CSS/HTML option</a> ): "data-amp-autoplay='false'".

### Multi-Location
<img className="higher" width='50px' src={useBaseUrl('Multi-Location.png')} />

  * A single view of all locations is not supported. The top most location is the one presented first.
  * Google Map is used, and not Mapbox, like the HTML version.
### Photo Gallery
<img className="higher" width='50px' src={useBaseUrl('Photo_Gallery.png')} />

* Images viewer is the element which displays the images when they are clicked within the page.
  * Includes an option to view all images inside the image viewer mode

    <img className="shadow" width='200px' src={useBaseUrl('imageViewer.png')} /> <img className="shadow" width='200px' src={useBaseUrl('AllImagesViewer.png')} />

  * Share option and image counter inside the image viewer are not present in AMP.
  * Image description is the text that shows up under the ‘description’ field of the image in the editor.
  * Image descriptions are aligned to the left and not centered.
* Very seldomly, an image might show up with an error message. This has nothing to do with the AMP site itself. It is caused by a temporary rendering issue on the client side. If the user will slide away from the image and back again, or refresh the page - the issue will be resolved. 
* **Instagram** - Images are pulled from Instagram when the AMP page is updated by Google. This may lead to the newest images not showing up in the Photo Gallery until the next update of the page.
* Image Buttons: very seldomly, an image button might show up in the AMP version, when it doesn’t exist in the source page. To solve this, in the editor, reset that button’s visibility (click to show it, wait 5 seconds, and hide it again), re-publish the site, and update the AMP page. 
### Popups
  * If a popup is triggered from within another popup (e.g. a button that opens a popup sits within another popup) - the inner popup will not open as a lightbox, but rather open in a new tab. Do you require assistance with this feature? Contact us at help@ampify.io
  * **Animations**: this relates animations set for the appearance of a popup. The supported animations are 'Fade-in' and 'Flush'. Other animation types will be converted to 'Fade-in'.
### Row Background Design
  * Image Slider:
    * In the AMP version, only sliding animation is supported. Other types of animation will be converted to the sliding motion.
    * The 'tile repeat' and 'tile no-repeat' layouts will be shown as 'cover' in the AMP version.
    * All other aspects of the row background slider are identical.
### RSS Feed
<img className="higher" width='50px' src={useBaseUrl('RSS_Feed.png')} />

  * RSS Feed widget is not enabled in AMP.
### Site Navigation Links
<img className="higher" width='50px' src={useBaseUrl('Site_Navigation_Links.png')} />

* Site Navigation Links widget is identical to the HTML version, with a single difference: opened sub-menus can be closed by tapping anywhere outside the opened sub-menu, but not by tapping the submenu’s title.
### Tabs
<img className="higher" width='50px' src={useBaseUrl('Tabs.png')} />

Accordion tabs open in a slightly smoother manner compared to the source.
### Twitter feed
<img className="higher" width='50px' src={useBaseUrl('Twitter_feed.png')} />

* The feed width might be 2-3 pixels thinner compared to the source.
* Feed Height: to prevent visible content shifting, which may harm user experience and even render the AMP invalid, users may see a ‘load more’ button at the bottom of the feed in the following cases:
  * If the bottom of the feed is within in the top 75% of the screen when the viewport is at the top of the page.
  * If cases where less content is available to show in the feed compared to when the AMP page was created (rare).
### Zoom Meeting
<img className="higher" width='50px' src={useBaseUrl('Zoom_Meeting.png')} />

  * Zoom Meeting widget is not enabled in AMP.
## eComerce Widgets
<img className="higher" width='50px' src={useBaseUrl('Store_Widgets.png')} />

  * eCommerce is not yet fully supported in AMP. While some store related widgets are supported, product pages, as well as Main Store widget can't be ampified.
  * Store Product Gallery:
    * Enabled in AMP, with the following changes:
    * Prices, Sale status, Out-of-Stock status and product details are updated when the page is being updated - they are not directly synced to the live prices in the site. If a price changes in the site - it will take effect in the AMP version only after the next update of the AMP page by Google, which may take up to several days. Keep this in mind if the prices or product statuses change frequently in the site.
## AMP support for old widgets
  * Ampify supported the widgts' latest version. If you encounter an issue in Ampifying a specific widget, check in the Editor if this widget is up to date.
## 3rd Party Widgets
### Facebook Messenger

  * FB Messenger is supported in AMP.
  * When clicking the chat icon, a new chat will open either in the native app or in a new tab. This is different from the HTML version, where the chat can take place in the webpage itself.
  * __Chat Icon Color__: If you have customized your icon color and it isn't reflected in the AMP version, apply the following solution:
    write your widget #hex color in the following snippet (instead of #00000), paste it in the site header, then republish. 
    (#hex color can be obtained from the Messenger setup page, or by inspecting the icon in the browser) 

    ```
    <script> var fb_amp_color="#00000" </script>
    ```
    <img className="shadow" width="600px" src={useBaseUrl("add_html_to_head.png")} />


### Site Search 360

  * Site Search 360 is supported in AMP. 
  * Voice Search functionality isn't enabled in AMP, however upon clicking the voice search icon - the page will immediately redirect to the source HTML page, where the voice is enabled.
  * Query parameter must be present (i.e. not null). By default it is not null. The query parameter is controlled from the Site Search 360 widget edit window.
### Userway

  * Userway icon shows up like in the HTML version. It can be hidden in a similar fashion. When clicking on the icon itself, the page will redirect to the source page for the user to interact with the source Userway widget.  
  
### User Centric

  * User Centric cookie notice shows up like in the HTML version, and behaves in a similaqr fashion. When accepting the notice, it disappears. When denying or clicking the settings button, the page will redirect to the source page for the user to interact with the source UserCentric widget.

### Ngage

  * Ngage is supported in AMP. Bottom bar shows up, and clicking on it commences a chat in a new window, similar to the way it is in the HTML version. Sticky top bar is not supported in AMP.

### Typeform

  * Typeform is supported in AMP. Forms that are triggered by buttons will be opened in a full screen, like they normally do. Forms that are in an iframe will continue to be visible inside that iframe.

### Google Reviews by Elfsight

  * Google Reviews by Elfsight is supported in AMP. Carousel height is fixed and set to the height of the heighest slide.
  