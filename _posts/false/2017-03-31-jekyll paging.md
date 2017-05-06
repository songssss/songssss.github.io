---
layout: post
title: jekyll paginator
tags:
- jekyll
- blog
published: true
---


How to put pagination on github jekyll blog / posts paging / 지킬 블로그에 페이징 추가하기


### _config.yml

```html
gems: [jekyll-paginate, jekyll-gist]
paginate: 24  <!-- Number of posts per page / custom  -->
```

---

### _index.html

[https://jekyllrb.com/docs/pagination/](https://jekyllrb.com/docs/pagination/){:target="_blank"}

- add : <!-- Pagination links --> paginator code 추가

- change : for post in site.posts > for post in paginator.posts 

{% raw %}

```markdown
---
layout: default
---

<!-- This loops through the paginated posts -->
{% for post in paginator.posts %}
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  <p class="author">
    <span class="date">{{ post.date }}</span>
  </p>
{% endfor %}

<!-- Pagination links -->
{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
  {% else %}
    <span>&laquo; Prev</span>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <em>{{ page }}</em>
    {% elsif page == 1 %}
      <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a>
    {% else %}
      <a href="/{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
  {% else %}
    <span>Next &raquo;</span>
  {% endif %}
</div>
{% endif %}
```
{% endraw %}


{% assign openTag = '{%' %}

    {{ openTag }} raw %}
    {% raw %}{{{% endraw %}
    {{ openTag }} endraw %}

