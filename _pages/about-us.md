---
permalink: /about-us/
layout: splash
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/usyd-jacaranda.jpg
  caption: "Photo credit: [**Ian Sanderson**](https://www.flickr.com/photos/iansand/2705636883/)"

---

# About Us

# SUGUNA History

<div class="two-column-layout">
  <div class="column" style="flex: 7">
     {% capture my_include %}{% include history.md %}{% endcapture %}
   {{ my_include | markdownify }}
    </div>
  <div class="column" style="flex: 3">
     {% capture my_include %}{% include past-events-awards.md %}{% endcapture %}
   {{ my_include | markdownify }}

  </div>
</div>




