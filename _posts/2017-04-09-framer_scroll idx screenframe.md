---
layout: post
title: screenFrame + contentInset
tags:
- framer
- scroll
---

Framer_scrollComponent + idx + image + screenFrame + contentInset

스크롤컴포넌트 클릭하면 해당 페이지(이미지) 확대


### scrollComponent + idx + image

```javascript
#default Animation
Framer.Defaults.Animation = 
	curve:"cubic-bezier(0.19, 1, 0.22, 1)"
	time:0.8

isSel = false

scroll = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollVertical: false

//스크롤 패딩 값
scroll.contentInset =
	left: -215
	right: -215

for i in[0..5]
	layer = new Layer
		width: Screen.width
		height: Screen.height
		image: "images/" + i + ".jpg"
		scale: 0.4
		parent: scroll.content
	layer.x = (layer.width - 440) * i
	layer.xPos = layer.x
	layer.yPos = layer.y
	
	layer.onClick ->
		if isSel is false
			isSel = true
			this.bringToFront()
			scroll.scrollHorizontal = false
			this.animate
				properties:
					scale:1
					x:this.x - this.screenFrame.x + (this.width*0.6) / 2
					//줄어든 만큼 플러스 시킴
		else
			isSel = false
			scroll.scrollHorizontal = true
			this.animate
				properties:
					x:this.xPos
					scale:0.4
```
