---
layout: post
title: jekyll disqus
tags:
- jekyll
- comment
- disqus
- blog
published: true
---


How to put comment disqus & add count on github jekyll blog / disqus comment couunt

지킬 블로그에 댓글 및 카운트 기능 추가하기


[DISQUS](https://disqus.com/) 사이트 가입

### add disqus / 댓글 기능 추가

#### post.html 

```html
//상단 comments: true 추가
---
layout: default
comments: true
---

<!-- 하단 comment 레이아웃 코드 추가 -->

 <div id="disqus_thread"></div>
    <script type="text/javascript">
        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        var disqus_shortname = 'shortname 확인후 변경'; 
	// required: replace example with your forum shortname
	//disqus_shortname 은 admin > settings > general > sites > edit settings 에서 확인 후 변경
        // var disqus_developer = 1; // Comment out when the site is live
        var disqus_identifier = "{{ page.url }}";

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
</div>
```


---

### add disqus count / 댓글 카운트 추가

#### default.html 

js 추가

```html
<script id="dsq-count-scr" src="//shortname.disqus.com/count.js" async></script>
<!-- src 안의 shortname : 본인 name으로 변경 -->
```

#### index.html

포스트 안에 뿌려질 카운트 태그 추가

```html
<a class="cmt_count" href="{{ post.url }}index.html#disqus_thread" data-disqus-identifier="{{post.url}}"></a>
```

기본 : (num)comment 로 뿌려짐

Customizing comment count link text
Comment count link text can be customized at your **Disqus Admin > Settings > Community page**

본인의 DISQUS setting 페이지에서 커스터마이징 가능





[Reference: perfectlyrandom.org](http://www.perfectlyrandom.org/2014/06/29/adding-disqus-to-your-jekyll-powered-github-pages/)

[Reference: help.disqus.com](https://help.disqus.com/customer/portal/articles/565624-adding-comment-count-links-to-your-home-page)