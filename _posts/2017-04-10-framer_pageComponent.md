---
layout: post
title: pageComponent
tags:
- framer
- pageComponent
---

Framer_pageComponent / 페이지 컴포넌트


### pageComponent

```javascript
#default Animation
Framer.Defaults.Animation = 
	curve:"cubic-bezier(0.19, 1, 0.22, 1)"
	time:0.8

isSel = false

page = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollVertical: false

for i in[0..5]
	layer = new Layer
		width: Screen.width
		height: Screen.height
		image: "images/" + i + ".jpg"
		parent: page.content
	layer.x = layer.width * i
	
	#나머지것들은 작고 반투명하게
	if i isnt 0
		layer.scale = 0.7
		layer.opacity = 0.5
	
//event when page is switched 페이지가 전환되면 이벤트 실행
page.on "change:currentPage", ->
	page.previousPage.animate
		properties:
			scale: 0.7
			opacity: 0.5
	page.currentPage.animate
		properties:
			scale:1
			opacity:1
```
