---
permalink: /about-us/
layout: splash
classes: wide
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




