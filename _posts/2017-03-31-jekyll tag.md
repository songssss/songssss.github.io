---
layout: post
title: jekyll tag
tags:
- jekyll
- tag
published: true
---


How to put tag cloud archive on github jekyll blog / tagcloud / 지킬 블로그에 태그 클라우드 기능 추가하기



`tags.html` 파일 생성
{% raw %}
```markdown
---
layout: page
permalink: /tags/
---

<ul class="tag-cloud">
{% for tag in site.tags %}
  <li style="font-size: {{ tag | last | size | times: 100 | divided_by: site.tags.size | plus: 70  }}%">
    <a href="#{{ tag | first | slugize }}">
      {{ tag | first }}
    </a>
  </li>
{% endfor %}
</ul>

<div id="archives">
{% for tag in site.tags %}
  <div class="archive-group">
    {% capture tag_name %}{{ tag | first }}{% endcapture %}
    <h3 id="#{{ tag_name | slugize }}">{{ tag_name }}</h3>
    <a name="{{ tag_name | slugize }}"></a>
    {% for post in site.tags[tag_name] %}
    <article class="archive-item">
      <h4><a href="{{ root_url }}{{ post.url }}">{{post.title}}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
```
{% endraw %}

`_include/post-tags.html` 생성

{% raw %}
```markdown
<div class="post-tags">
  Tags:
  {% if post %}
    {% assign tags = post.tags %}
  {% else %}
    {% assign tags = page.tags %}
  {% endif %}
  {% for tag in tags %}
  <a href="/tags/#{{tag|slugize}}">{{tag}}</a>{% unless forloop.last %},{% endunless %}
  {% endfor %}
</div>
```
{% endraw %}


### post layout 에 아래 코드 추가

{% raw %}
    {% include post-tags.html %}
{% endraw %}


### styles.css 에 추가

```css
// for tag cloud and archives
.tag-cloud {
  list-style: none;
  padding: 0;
  text-align: justify;
  font-size: 16px;
  li {
    display: inline-block;
    margin: 0 12px 12px 0;
  }
}
#archives {
  padding: 5px;
}
.archive-group {
  margin: 5px;
  border-top: 1px solid #ddd;
}
.archive-item {
  margin-left: 5px;
}
.post-tags {
  text-align: right;
}
```

### post 의 front matter 에 tags 정보 추가

```markdown
---
layout: post
title: This is an example.
tags:
- jekyll
- example
published: true
---

This is a post for an example.
```

[참고: github jekyll 태그 적용](http://blog.meinside.pe.kr/Adding-tag-cloud-and-archives-page-to-Jekyll/){:target="_blank"}