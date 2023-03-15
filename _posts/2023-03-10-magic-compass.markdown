---
layout: post
title: Magic Compass
date: 2023-03-09 00:00:00 +0300
range: Spring 2023
description: Magic Compass features cute characters that use your phone’s sensors to act as a compass needle
img: magic-compass.png # Add image post (optional)
tags: [Technology] # add tag
---

The Magic Compass is an app featuring a collection of cute characters that use your phone’s sensors to act as a compass needle. Play with Magic Compass on your next hiking adventure and or let your kids discover the joy of using a traditional compass.
<div class="centered-flex-row-container">
<img class= "magic-compass-image" src="{{site.baseurl}}/assets/img/unicorn.gif" />
<img class= "magic-compass-image" src="{{site.baseurl}}/assets/img/samosa.gif" />
<img class= "magic-compass-image" src="{{site.baseurl}}/assets/img/frog.gif" />
<img class= "magic-compass-image" src="{{site.baseurl}}/assets/img/mustard.gif" />
</div>

You can download Magic Compass on the Apple App Store or Google Play Store:

<div class="centered-flex-row-container">
<a href="https://apps.apple.com/us/app/id1671371265?platform=iphone" target = "_blank" class="button">Apple App Store</a>
<a href="https://play.google.com/store/apps/details?id=com.alli.magic_compass" target = "_blank" class="button">Google Play Store</a> 
</div>

### Background

I was inspired to build Magic Compass when I saw how intrigued my younger cousins were with using a traditional compass. I wanted to create something fun to play with that would spark their curiosity and to learn about the world around them. I hope that people of all ages enjoy Magic Compass. If you’d like to support Magic Compass, consider purchasing a compass mode to help maintain Magic Compass and other future learning tools. I appreciate your support!

### Technical Background

This app was the first mobile Android and iOS app I built completely end to end. I built both the Android and iOS apps using Flutter, and set up in-app purchases to work on both platforms. My main learning objectives were to get more familiar with the Apple’s and Google’s workflows testing, releasing and including in app purchases in an app.

### Compass Sensor

I created Magic Compass with Flutter to build the iOS and Android apps. The app incorporates a package called [Flutter Compass](https://pub.dev/packages/flutter_compass). This package utilizes the onboard compass in Swift’s `CLLocationManager` for iOS and the rotation vector sensor on Android. If the rotation vector sensor is not available on Android,the app falls back to the accelerometer and magnetic field.

### In App Purchases
The app interfaces with both the Apple App Store and the Google Play Store to offer in-app purchases. I decided to offer in-app purchases as a way to support the development and upkeep of magic compass and to support more fun projects like this in the future. All compass modes are non-consumable and only need to be purchased once. Previous purchases can be restored through a “Restore Purchases” button.
