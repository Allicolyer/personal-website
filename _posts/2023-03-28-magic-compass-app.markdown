---
layout: post
title: Get the Magic Compass App
date: 2023-03-28 00:00:00 +0300
range: Spring 2023
description: Choose a magical creature to navigate your next adventure!
img: magic-compass-app-banner.png # Add image post (optional)
tags: [Technology] # add tag
hidden: true
no-cover: true
---
<script type="text/javascript">
   //removes fbclid parameter added by facebook sharing: https://www.michalspacek.com/using-javascript-to-modify-urls-and-hide-fbclid
   (function() {
       var param = "fbclid";
       if (location.search.indexOf(param + "=") !== -1) {
           var replace = "";
           try {
               var url = new URL(location);
               url.searchParams.delete(param);
               replace = url.href;
           } catch (ex) {
               var regExp = new RegExp("[?&]" + param + "=.\*$");
               replace = location.search.replace(regExp, "");
               replace = location.pathname + replace + location.hash;
           }
           history.replaceState(null, "", replace);
       }
   })();
   // Check if the user agent indicates an iPhone
   if (navigator.userAgent.match(/iPhone/i)) {
     // Redirect to the iPhone-specific page
     window.location.replace("https://apps.apple.com/us/app/id1671371265?platform=iphone");
   }
   else if (navigator.userAgent.match(/iPad/i)) {
     // Redirect to the iPad-specific page
     window.location.replace("https://apps.apple.com/us/app/id1671371265?platform=ipad");
   }
   // Check if the user agent indicates an Android
   else if (navigator.userAgent.match(/Android/i)) {
     // Redirect to the Android-specific page
     window.location.replace("https://play.google.com/store/apps/details?id=com.alli.magic_compass");
   }
   // If neither condition is met, do nothing
</script>
<div class="centered-flex-row-container">
   <h3>
      <center>
         Scan the QR code to download on your mobile device or use the buttons below.
      </center>
   </h3>
</div>
<div class="centered-flex-row-container">
   <img alt='Scan QR code to download'  class= "image-30-percent-width"
      src='{{site.baseurl}}/assets/img/magic-compass-qr.png'/>
   <div class="centered-flex-column-container" class= "image-30-percent-width">
      <a href='https://apps.apple.com/us/app/id1671371265?platform=iphone' 
         target="_blank"><img alt='Get it on the App Store' style="padding:0% 6.79%" src='https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png'/></a>
      <a href='https://play.google.com/store/apps/details?id=com.alli.magic_compass&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
         target="\_blank"><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
   </div>
</div>
<div class="centered-flex-row-container" style="padding-top:15px">
   <img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/unicorn.gif" />
   <img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/samosa.gif" />
   <img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/frog.gif" />
   <img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/mustard.gif" />
</div>
