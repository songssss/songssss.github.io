---
layout: post
title: modulate photo filter
tags:
- framer
- modulate
---

Framer_modulate + photo filter : sliderComponent knob

스크롤컴포넌트 & 모듈레이트로 포토필터


### sliderComponent + modulate

```javascript
Framer.Extras.Hints.disable()

frame = new Layer
	width: Screen.width
	height: Screen.width
	image: "images/0.png"

properties = ["grayscale","Blur","Brightness"]
allSliders = []

for i in [0..2]
	control = new Layer
		width: Screen.width
		backgroundColor: null
		html:properties[i]
		style:
			textAlign:"center"
			fontSize:"36px"
			lineHeight:"2.5"
	control.y = Screen.width + control.height * i

	slider = new SliderComponent
		width: Screen.width - 200	
		parent:control
		y:100
		midX:Screen.width/2
	
	slider.knobSize = 50
	slider.knob.shadowY = 10
	slider.knob.shadowBlur = 20

	slider.animateToValue(0,{time:0})
	//기본값 설정
	
	allSliders.push(slider)

allSliders[0].on "change:value", ->
	frame.grayscale = Utils.modulate(this.value,[0,1],[0,100],true)
allSliders[1].on "change:value", ->
	frame.blur = Utils.modulate(this.value,[0,1],[0,30],true)
allSliders[2].on "change:value", ->
	frame.brightness = Utils.modulate(this.value,[0,1],[100,50],true)
```
