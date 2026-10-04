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

## Upcoming October events!

The [University of Sydney](https://sydney.edu.au/) and SUGUNA are excited to announce **two
events** in October open to all alumni and SUGUNA members: one in
Boston, and the other in Palo Alto in the San Francisco Bay Area.

### Boston/Cambridge event

The Boston get-together will be at the Australian-style [Bluestone
Lane](https://bluestonelane.com/cafes/harvard-square-27-brattle-st-cambridge/)
coffee shop in Harvard Square, site of many of our previous events.

- **Wednesday 7 October 2026**
- 6.00 - 8.00pm PM ET
- Bluestone Lane, 27 Brattle St, Cambridge, MA 02138


 [Register now for Boston!](https://usydevents.swoogo.com/boston_alumni_reception/begin){: .btn .btn--primary .btn--large target="_blank" rel="noopener noreferrer" }  (closes Oct 1)

### Bay Area/Sunnyvale event

The Bay Area reception will be at Google in Sunnyvale.

- **Thursday 15 October 2026**
- 6.00 - 8.00pm PM PT
- Google Building MP, 1195 Borregas Ave, Sunnyvale, CA 94089

 [Register now for Palo Alto!](https://usydevents.swoogo.com/palo_alto_reception/begin){: .btn .btn--primary .btn--large target="_blank" rel="noopener noreferrer" }

{% endcapture %}
{{ left_box | markdownify }}
  </div>

  <div class="column" style="text-align: center; padding-left: 1em; padding-right: 1em;">
{% capture right_box %}


![alt]({{ site.url }}{{ site.baseurl }}/assets/images/leonard-p-zakim-bunker-hill-bridge-at-night-boston-massachusetts.jpg)

![alt]({{ site.url }}{{ site.baseurl }}/assets/images/bluestone-exterior.jpg)


{% endcapture %}
{{ right_box | markdownify }}
  </div>

</div>

<div class="two-column-layout" style="border: 2px solid #0073ff; background-color: #f0f8ff; padding: 1em; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; text-align: left;">

 <div class="column" style="padding-left: 1em; padding-right: 1em;">
 
{% capture bottom_left_box %}

## 2026 Annual General Meeting

* Our 2026 AGM was held virtually on **August 10, 2026**. Members elected
  a new [Board](#board-of-directors) Director, **Vish Ponnampalam** and
  continuing Directors, **Ron Ettinger** and **Christopher Lawrance**
  for two year terms ending in 2028. Congratulations all! We also
  thank outgoing Directors  **Jenny Green** and President Emeritus
  **Richard Southby**, who is stepping down as a voting Board member,
  but remains _ex officio_.

* We were also delighted to welcome [**Professor Victoria
  Cogger**](https://profiles.sydney.edu.au/victoria.cogger), founding
  Executive Director of the [Sydney Biomedical
  Accelerator](https://sydneybiomedicalaccelerator.org/), who gave a
  wonderful keynote presentation.

* In very sad news, current SUGUNA Board member, **Angela Wales
  Kirgo** [passed away at the end of
  July](https://www.hollywoodreporter.com/news/general-news/angela-wales-kirgo-dead-writers-guild-foundation-1236660070/). Outgoing
  Board member Jenny Green gaving a moving tribute to Angela's long
  service to SUGUNA at the AGM.

{% endcapture %}
{{ bottom_left_box | markdownify }}

</div>

<div class="column" style="padding-left: 1em; padding-right: 1em;">

{% capture bottom_right_box %}

[![Professor Victoria Cogger]({{ site.url }}{{ site.baseurl }}/assets/images/victoria-cogger.jpeg)](https://profiles.sydney.edu.au/victoria.cogger)

  <sub>**Professor Victoria Cogger**
  Founding Executive Director of the Sydney Biomedical Accelerator, discussed the future of biomedical innovation and research translation.</sub>

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
	

