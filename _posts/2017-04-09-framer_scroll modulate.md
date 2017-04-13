---
layout: post
title: scroll + modulate
tags:
- framer
- scroll
- modulate
---

Framer_scroll + modulate

스크롤컴포넌트 & 모듈레이트로 드래그한만큼 애니메이션


### scrollComponent + modulate

```javascript
Framer.Extras.Hints.disable()

scroll = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false

for i in [0..5]
	layer = new Layer
		width: Screen.width
		height: 500
		y: 500 * i
		backgroundColor: Utils.randomColor(1)
		parent:scroll.content
		
top = new Layer
	width: Screen.width
	backgroundColor: "white"
	opacity: 0.8
	shadowY: 10
	shadowBlur: 5
	html: "Hello"
	style: 
		textAlign:"center"
		fontSize:"3em"
		lineHeight:"2.5"
		color:"#444"
		
direction = new Layer
	width: 100
	height: 100
	image: "images/direction.png"
	backgroundColor:"white"
	borderRadius: "50%"
	x:Align.center
	rotation: 180
	opacity: 0
	
direction.placeBehind(top)

scroll.onMove ->
	direction.opacity = Utils.modulate(scroll.scrollY, [0,-200], [0,1], true)
	direction.scale = Utils.modulate(scroll.scrollY, [0,-200], [1,2], true)
	direction.rotation = Utils.modulate(scroll.scrollY, [0,-400], [0,180], true)
	
	direction.midY = -scroll.scrollY/2 + 100
```
