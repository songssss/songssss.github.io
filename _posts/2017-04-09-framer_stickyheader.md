---
layout: post
title: sticky header
tags:
- framer
---


framer_sticky header / for in 문 xpos ypos change:y / 스크롤시 헤더 고정

```javascript
bg = new BackgroundLayer
alphabet = ["A","B","C","D","E","F"]
allHeader = []
scroll = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false

for i in [0..5]
	list = new Layer
		width: Screen.width
		height: 500
		y: 500 * i
		backgroundColor: "white"
		parent: scroll.content
		
	header = new Layer
		width: Screen.width
		height: 100
		parent: scroll.content
		y: list.minY
		backgroundColor: Utils.randomColor(1)
		html: alphabet[i]
		style: 
			textAlign : "center"
			fontSize: "2em"
			lineHeight: "1.8"

	allHeader.push(header)
	header.yPos = header.y

//스크롤 안의 컨텐츠의 y값이 바뀔때마다
scroll.content.on "change:y", ->
	//headers 라는 지역변수 
	for headers in allHeader
		if scroll.scrollY > headers.yPos
			//헤더끼리 붙으면 위 헤더가 같이 올라가게
			if scroll.scrollY > headers.yPos + 400
				headers.y = headers.yPos + 400
			else
				headers.y = scroll.scrollY
		else
			headers.y = headers.yPos
```
