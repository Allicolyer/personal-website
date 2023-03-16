---
layout: post
title: Magic Compass
date: 2023-03-09 00:00:00 +0300
range: Spring 2023
description: Magic Compass features cute characters that use your phone’s sensors to act as a compass needle.
img: magic-compass.png # Add image post (optional)
tags: [Technology] # add tag
---

The Magic Compass is an app featuring a collection of cute characters that use your phone’s sensors to act as a compass needle. Play with Magic Compass on your next hiking adventure and or let your kids discover the joy of using a traditional compass.
<div class="centered-flex-row-container">
<img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/unicorn.gif" />
<img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/samosa.gif" />
<img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/frog.gif" />
<img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/mustard.gif" />
</div>

You can download Magic Compass on the Apple App Store or Google Play Store:

<div class="centered-flex-row-container">
<a href="https://apps.apple.com/us/app/id1671371265?platform=iphone" target = "_blank" class="button">Apple App Store</a>
<a href="https://play.google.com/store/apps/details?id=com.alli.magic_compass" target = "_blank" class="button">Google Play Store</a> 
</div>

### Background

The inspiration behind building Magic Compass came to me when I witnessed my younger cousins' fascination with using a traditional compass. I wanted to build an app that would not only be enjoyable but also spark curiosity and inspire learning about the world around us. My goal was to create something that would be fun and interactive, but also educational. I believe that Magic Compass has something to offer for everyone, regardless of age. It's a useful tool for outdoor enthusiasts, hikers, campers, and anyone who loves exploring new places. It's also an excellent learning tool for kids who are interested in geography, navigation, and the natural world.

If you are enjoying Magic Compass, please consider supporting its development by purchasing a compass mode. Your support is highly appreciated, and it helps me to maintain Magic Compass and create new and exciting learning tools for the future. Thank you for your support and for being a part of the Magic Compass community.


### Features 
#### Compass Modes

The compass can be used in two different ways. The first way is for the entire compass dial to rotate. This is similar to how the built in compass on Samsung works and is very intuitive to use.

<div class="centered-flex-row-container">
<img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/boba.gif" />
<img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/starfish.gif" />
</div>

The second way is for just the compass needle to rotate. This is similar to a traditional compass where the needle aligns itself with the Earth’s magnetic fields. To activate this feature, the user can tap on the switch button located below the compass.

<div class="centered-flex-row-container">
<img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/cat.gif" />
<img class= "image-20-percent-width" src="{{site.baseurl}}/assets/img/narwhal.gif" />
</div>

#### In App Purchases

The app interfaces with both the Apple App Store and the Google Play Store to offer in-app purchases. I decided to offer in-app purchases as a way to support the development and upkeep of Magic Compass. All of the compass modes in Magic Compass are non-consumable, which means that users only need to purchase them once. Additionally, the "Restore Purchases" button makes it easy for users who have switched devices or reinstalled the app to regain access to their previously purchased compass modes.

### Technical Background

I built both the Android and iOS apps using Flutter. Flutter is a popular mobile app development framework that allows developers to build high-quality applications for both iOS and Android devices using a single codebase. I used the [Flutter Provider](https://pub.dev/packages/provider) package to manage state. State management is an essential aspect of any Flutter app, as it allows developers to manage the app's state efficiently and avoid unnecessary rebuilds. The Provider package is a popular and easy-to-use state management solution that uses the InheritedWidget mechanism to manage the app's state.

I used a Flutter library called [in app purchases](https://pub.dev/packages/in_app_purchase) to interface between the Google Play Store and the Apple App Store. This package provides an easy-to-use solution for integrating in-app purchases in Flutter applications. The package supports both iOS and Android platforms and provides a streamlined API for interacting with the respective app stores. Events are listened to and the state of the app changes when there is an async operation to the app store happening. This was especially important testing the iOS app  as I found the TestFlight environment to be slow compared to the production Apple environment and the Google Play environments.

To get an accurate compass reading, this app incorporates a package called [Flutter Compass](https://pub.dev/packages/flutter_compass). This package utilizes the onboard compass in Swift’s `CLLocationManager` for iOS and the rotation vector sensor on Android. If the rotation vector sensor is not available on Android, it falls back to the accelerometer and magnetic field.