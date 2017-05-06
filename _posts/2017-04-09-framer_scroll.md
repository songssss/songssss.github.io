---
layout: post
title: scrollComponent
tags:
- framer
- scroll
---

Framer_scrollComponent

스크롤컴포넌트


### scrollComponent

```javascript
scroll = new ScrollComponent 
//pageComponent 페이지 기준으로

좌우스크롤만 되도록 lock
scrollVertical = false
scroll.width = Screen.width
scroll.height = Screen.height

	//hierarchy
	width: Screen.width
	height: Screen.height
	scrollVertical: false



for i in [0...10]
	layer = new Layer
		width:Screen.width
		height:Screen.height
	layer.x = layer.width * i
	layer.backgroundColor = Utils.randomColor(1)

//레이어들이 스크롤 컴포넌트의 차일드로 들어감
layer.parent = scroll.content
```
