---
layout: post
title: page + thumbnail
tags:
- framer
- pageComponent
---

Framer_pageComponent + thumbnail + array + idx

페이지 컴포넌트 썸네일 클릭시 해당 idx값을 받아서 페이지 전환


### pageComponent

```javascript
Framer.Extras.Hints.disable()

Framer.Defaults.Animation = 
	curve:"cubic-bezier(0.19, 1, 0.22, 1)"
	time:0.8

//배열
imgItems = []
smallItems = []
selectedSmall = null //비어둠

page = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollVertical: false

for i in[0..5]
	layer = new Layer
		width: Screen.width
		height: Screen.height - 100
		image: "images/" + i + ".jpg"
		parent: page.content
	layer.x = layer.width * i
	layer.idx = i
	imgItems.push(layer)

	//썸네일
	small = new Layer
		width: 150
		height: 100
		image: "images/" + i + ".jpg"
	small.x = small.width * i
	small.y = Align.bottom
	small.idx = i
	smallItems.push(small)
	
	//나머지것들은 작고 반투명하게
	if i isnt 0
		small.opacity = 0.5
	else
		selectedSmall = small
		//빈값이엇지만 다시 스몰들 값을 넣어줌

	//썸네일 클릭시 해당 이미지로 이동
	small.onClick ->
		page.snapToPage(imgItems[this.idx])
	
//swipe될때 스몰아이엠지한테 알려줌
page.on "change:currentPage", ->
	#null이 아니면
	if selectedSmall isnt null
		#선택 안된 애들
		selectedSmall.animate
			properties:
				opacity:0.4
		#선택된애들
		smallItems[page.currentPage.idx].animate
			properties:
				opacity:1
				
	//selectedsmall한테 현재 선택된 스몰아이템을 넣어줌 이프문 타서 -> opacity 1로
	selectedSmall = smallItems[page.currentPage.idx]
```
