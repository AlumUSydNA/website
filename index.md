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
  #overlay_image: /assets/images/suguna-bluestone-lane.jpg
  overlay_image: /assets/images/usyd-jacaranda.jpg
  #overlay_image: /assets/images/SUGUNA-logo5-banner-shield.jpg
  #actions:
  #  - label: "Download"
  #    url: "https://github.com/mmistakes/minimal-mistakes/"
  caption: "Photo credit: [**Ian Sanderson**](https://www.flickr.com/photos/iansand/2705636883/)"
  #caption: "Photo credit: SUGUNA"
excerpt: >
   <br/>Sydney University Graduates Union North America is the association for alumni, students, associates and friends of the University of Sydney in North America.

---

<!--  <small>We work with alumni and the extended North American USyd community and to support the University and each other.</small> -->
<!-- {% include feature_row id="intro" type="center" %}  -->

We are alumni and friends of the University of Sydney who run social
and networking events throughout the United States, Canada, and
Mexico, aimed at connecting with one another and remaining connected
to the university.  We are always excited about ideas from our members
about how best to do this. Some of our previous activities have also
included larger scale conferences, alumni awards, and scholarships. We
welcome into our group students from USyd who are here temporarily as
part of their studies or training, and we are proud to represent the
interests of our members in North America.

<div class="two-column-layout" style="border: 2px solid #0073ff; background-color: #f0f8ff; padding: 1em; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; text-align: left;">

  <div class="column" style="text-align: left; padding-left: 2em; padding-right: 2em;">
  
    {% capture left_box %}

## Thanks for joining us in Vancouver!

We had a great turnout at at the [Sandman Hotel Vancouver City
Centre](https://www.sandmanhotels.com/signature-vancouver-downtown/) in downtown Vancouver on
**Saturday 23 May 2026**. More updates to come!

{% endcapture %}
{{ left_box | markdownify }}
  </div>

  <div class="column" style="text-align: center; padding-left: 1em; padding-right: 1em;">
{% capture right_box %}


![alt]({{ site.url }}{{ site.baseurl }}/assets/images/suguna-vancouver-may-2026.jpg)

{% endcapture %}
{{ right_box | markdownify }}
  </div>

</div>

<div class="two-column-layout" style="border: 2px solid #0073ff; background-color: #f0f8ff; padding: 1em; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; text-align: left;">

 <div class="column" style="padding-left: 1em; padding-right: 1em;">
 
{% capture bottom_left_box %}

## 2026 Annual General Meeting

* We are happy to announce our 2026 AGM will be held **Monday August
  10, 2026**. It will be held virtually, on Zoom. Members can register
  below. **Not yet a member? You can join SUGUNA during registration
  or [on our website](#join-suguna)**.
  
  [Register on Zoom for AGM now!](https://us06web.zoom.us/meeting/register/zZ_3mN98ToGTMenwWAZ5sQ){: .btn .btn--primary .btn--large target="_blank" rel="noopener noreferrer" }
  
* We will be electing new and continuing members of the [Board of
  Directors](#board-of-directors).

* Following the election, we are delighted to welcome [Professor
  Victoria Cogger](https://profiles.sydney.edu.au/victoria.cogger),
  founding Executive Director of the [Sydney Biomedical
  Accelerator](https://sydneybiomedicalaccelerator.org/), as our
  keynote speaker.


{% endcapture %}
{{ bottom_left_box | markdownify }}

</div>

<div class="column" style="padding-left: 1em; padding-right: 1em;">

{% capture bottom_right_box %}

[![Professor Victoria Cogger]({{ site.url }}{{ site.baseurl }}/assets/images/victoria-cogger.jpeg)](https://profiles.sydney.edu.au/victoria.cogger)

  <sub>**Professor Victoria Cogger**
  Founding Executive Director of the Sydney Biomedical Accelerator, will discussing the future of biomedical innovation and research translation.</sub>

{% endcapture %}
{{ bottom_right_box | markdownify }}

</div>

</div>


<div class="page__hero--overlay" style="margin: 0;">
  <div class="page__hero-image" style="
    background-image: url('{{ '/assets/images/suguna-bluestone-lane.jpg' | relative_url }}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 280px;
    position: relative;">

    <!-- Dark overlay -->
    <div style="
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 1;">
    </div>

    <!-- Caption -->
    <div class="page__hero-caption" style="position: absolute; bottom: 0; z-index: 2;">
      <span class="page__hero-caption-text">Photo credit: SUGUNA</span>
    </div>
  </div>
</div>

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


<!--
<div class="splash-image-body" style=" width: 100%; max-width: 100%; overflow: hidden; margin: 2em 0;">
  <img src="{{ '/assets/images/usyd-jacaranda.jpg' | relative_url }}" alt="USyd quad jacaranda" style=" width: 100%; height: auto; display: block;">
</div>
-->

<!-- About section -->

<div class="two-column-layout">
  <div class="column">
   {% capture my_include %}{% include who-are-we.md %}{% endcapture %}
   {{ my_include | markdownify }}
   
   {% capture my_include %}{% include contact.md %}{% endcapture %}
   {{ my_include | markdownify }}
   
    </div>
  <div class="column">
   {% capture my_include %}{% include board.md %}{% endcapture %}
   {{ my_include | markdownify }}
  </div>
</div>
	

