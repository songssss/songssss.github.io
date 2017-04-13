---
layout: post
title: sliderComponent
tags:
- framer
- slider
---

Framer_sliderComponent

슬라이더 컴포넌트


### sliderComponent

```javascript
Framer.Extras.Hints.disable()
bg = new BackgroundLayer

slider= new SliderComponent
	height: 30
	knobSize: 80
	width: 450

slider.center()
slider.fill.backgroundColor = "skyblue"
slider.knob.shadowY = 10
slider.knob.shadowBlur = 20
slider.knob.draggable.momentum = false

//최대값 최소값 설정
// slider.min = 0

slider.on "change:value", ->
# 	print this.value
# 	print slider.pointForValue(0.5)
# 	#0.5벨류에 해당하는 값은 275
# 	print slider.valueForPoint(200)

button = new Layer
	scale: 0.5
	x:Align.center()
	
move = ->
	slider.animateToValue(0.5,{curve:"spring"})
	
button.onClick ->
	move()
```
