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

# Join us in Seattle on October 7!

We look forward to welcoming all our friends in the US Pacific
Northwest, and West Coast Canada to a networking event! [Join
SUGUNA](#join-suguna) (membership is free) and [register](https://university-comms.sydney.edu.au/pub/pubType/EO/pubID/zzzz68ca0c0283db8298/interface.html)!

* **WHEN**: Tuesday 7 October 2025, 6 pm to 9 pm
* **WHERE**: [The Mountaineering Club
  Seattle](https://www.themountaineeringclub.com/) at the Graduate by
  Hilton Seattle, **4507 Brooklyn Ave NE, Seattle, WA 98105**
* **COST**: Free, hors d'oeuvres will be provided, alongside a cash
  bar

{% endcapture %}
{{ left_box | markdownify }}
  </div>

  <div class="column" style="text-align: center; padding-left: 1em; padding-right: 1em;">
{% capture right_box %}

[![alt]({{ site.url }}{{ site.baseurl }}/assets/images/seattle-mountaineering-club.jpg)](https://university-comms.sydney.edu.au/pub/pubType/EO/pubID/zzzz68ca0c0283db8298/interface.html)

[Register now!](https://university-comms.sydney.edu.au/pub/pubType/EO/pubID/zzzz68ca0c0283db8298/interface.html){: .btn .btn--primary .btn--large target="_blank" rel="noopener noreferrer" }

{% endcapture %}
{{ right_box | markdownify }}
  </div>

</div>

<div class="two-column-layout" style="border: 2px solid #0073ff; background-color: #f0f8ff; padding: 1em; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; text-align: left;">

 <div class="column" style="padding-left: 1em; padding-right: 1em;">
 
{% capture bottom_left_box %}

## 2025 Annual General Meeting

* We were thrilled to see 100 of you from across Canada, Mexico, the
  United States, and Australia at the August 11, 2025 SUGUNA Special
  and Annual General Meetings

* The [proposed
  amendments](assets/downloads/suguna-bylaws-amendments-2025-04-06.pdf)
  to the SUGUNA Bylaws are now [official](assets/downloads/suguna-bylaws-2025.pdf).  
   
* The [Board of Directors](#board-of-directors) been elected with
  staggered terms ending in 2026 and 2027 with Alex Lancaster, as the
  new President of SUGUNA, with Richard Southby completing his terms
  to become President Emeritus.

{% endcapture %}
{{ bottom_left_box | markdownify }}

</div>

<div class="column" style="padding-left: 1em; padding-right: 1em;">

{% capture bottom_right_box %}

{% include video id="1E6qM3KP6w_HPgDTH279klACp8VEP391t" provider="google-drive" %}

  <sub>See the welcome above from the Vice-Chancellor, Mark Scott AO,
  highlighting **SUGUNA's 35th anniversary**, along with the [175th
  anniversary of the University of Sydney
  itself](https://www.sydney.edu.au/about-us/our-story/175.html).</sub>

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
	

