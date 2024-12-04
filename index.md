---
layout: splash
permalink: /
classes: 
  - wide
  - dark-theme
  - landing
#header:
#  image: /assets/images/SUGUNA-logo5-banner-shield.png
hide_header: true
excerpt: >
  Main website for Sydney University Graduates Union North America (SUGUNA).
intro: 
  - excerpt: "The Sydney University Graduates Union North America (SUGUNA) is the association for alumni, students, associates and friends of the University of Sydney in North America. We are a United States-based 501(c)7 not-for-profit organisation that works with alumni and the extended USyd community and to support the University and each other."

---

<!-- Logo and Banner -->
<div style="align:center; text-align: center; margin: 20px 0; background-color: #ce1126ff;">
<img src="{{ site.baseurl }}/assets/images/SUGUNA-logo5-banner-shield.png" alt="SUGUNA Logo" style="max-width: 1200px;">
</div>

{% include feature_row id="intro" type="center" %} 

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
