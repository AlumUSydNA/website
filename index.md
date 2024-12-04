---
layout: splash
permalink: /
classes: 
  - wide
  - landing
  - home
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/usyd-jacaranda.jpg
  #overlay_image: /assets/images/SUGUNA-logo5-banner-shield.jpg
  #actions:
  #  - label: "Download"
  #    url: "https://github.com/mmistakes/minimal-mistakes/"
  caption: "Photo credit: [**Ian Sanderson**](https://www.flickr.com/photos/iansand/2705636883/)"
excerpt: >
   Sydney University Graduates Union North America is the association for alumni, students, associates and friends of the University of Sydney in North America.<br /> <small>We work with alumni and the extended North American USyd community and to support the University and each other.</small>
---

<!-- {% include feature_row id="intro" type="center" %}  -->

<div class="two-column-layout">
  <div class="column">
   {% capture my_include %}{% include membership.md %}{% endcapture %}
   {{ my_include | markdownify }}
    </div>
  <div class="column">
    {{ "## Join SUGUNA" | markdownify }}
    {% include mailchimp.html %}
  </div>
</div>

---
<!-- About section -->

<div class="two-column-layout">
  <div class="column">
   {% capture my_include %}{% include board.md %}{% endcapture %}
   {{ my_include | markdownify }}
    </div>
  <div class="column">
   {% capture my_include %}{% include contact.md %}{% endcapture %}
   {{ my_include | markdownify }}
  </div>
</div>

<!-- Logo and Banner -->
<div class="logo-container">
  <img src="{{ site.baseurl }}/assets/images/SUGUNA-logo5-banner-shield.png" alt="SUGUNA Logo">
</div>
