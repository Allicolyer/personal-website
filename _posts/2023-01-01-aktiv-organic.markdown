---
layout: post
title: Aktiv Organic Chemistry App
date: 2023-03-09 00:00:00 +0300
range: Spring 2023
description: Aktiv's innovative organic chemistry app allows students to draw organic molecules and provides targeted feedback to students.
img: aktiv-banner.png #Add image post (optional)
tags: [Technology] # add tag
---

As a Flutter developer at Aktiv Learning and Top Hat, I had the privilege of building the Organic Chemistry app from the ground up. The app has been a tremendous success and has been used by hundreds of thousands of students and professors, contributing to Aktiv's successful acquisition by Top Hat. Throughout the development process, I created innovative algorithms and custom widgets that enabled the app to accurately grade organic molecules and provide targeted feedback to students.

<iframe allowfullscreen="" frameBorder="0" title="Aktiv Grid Demo" src="https://player.vimeo.com/video/637533596?autoplay=1&amp;playsinline=1&amp;color&amp;autopause=0&amp;loop=1&amp;muted=1&amp;title=0&amp;portrait=0&amp;byline=0"></iframe>

To learn more about the Organic Chemistry app, please visit [Aktiv's website](https://aktiv.com/organic-chemistry/){: target="\_blank"}.

### Grading Algorithm
One of my key contributions to the app was the development of a proprietary grading algorithm for organic molecules. This algorithm can canonically identify molecules drawn in any orientation. It can also accurately understand chirality and E/Z isomers and can differentiate between stereoisomers. The grading algorithm ensures that the app understands and grades a students' work properly every time they answer a question.

### Automated Feedback Engine
In addition to the grading algorithm, I also implemented efficient algorithms for automated student feedback. These algorithms allowed the app to quickly identify and provide feedback on a wide range of issues, including improper functional groups, incorrect chain lengths, incorrect chirality, and incorrect molecular structures. These algorithms are crucial in ensuring that students receive accurate feedback on their work, and helps them understand where they went wrong and how they can improve.

![Aktiv Feedback]({{site.baseurl}}/assets/img/aktiv-feedback.png){: .center-image .image-60-percent-width}

### Flutter Interactives
I built highly customized Flutter widgets that enable students to rotate, interact with, and draw molecules in a hexagonal grid. The hexagonal grid adapts as the student draws the molecule, and the bonds rotate so that they are represented at proper bonding angles.

![Aktiv Feedback]({{site.baseurl}}/assets/img/grid.png){: .center-image .image-20-percent-width}

I also created several unique interactions for various organic chemistry question types, such as chair diagrams, Haworth projections, Fischer projections, and arrow pushing diagrams. Each interaction required custom Flutter widgets and grading algorithms, and each diagram was intelligently designed to avoid collisions.

<div class="centered-flex-row-container">
<img class= "image-40-percent-width" src="{{site.baseurl}}/assets/img/arrow-drawing.png" alt="arrow pushing diagram"/>
<img class= "image-40-percent-width" src="{{site.baseurl}}/assets/img/chair.png" alt="chair diagram"/>
</div>

I am truly passionate about leveraging technology to improve the way students learn, and building the Organic Chemistry app was an incredibly rewarding experience for me. Knowing that my contributions have helped hundreds of thousands of students and professors in their organic chemistry studies is a source of pride and fulfillment for me. I am grateful to have had the opportunity to work on this project, and I look forward to continuing to create impactful educational tools in the future.



