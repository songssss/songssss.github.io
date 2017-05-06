---
layout: post
title: framer_onboard
tags:
- framer
---


framer onboarding animation : addPage states.add overdrag

```javascript

# Import file "naver_walkthroughs"
psd = Framer.Importer.load("imported/naver_walkthroughs@1x")
Utils.globalLayers(psd)

#가변 사이즈 만들기
Device.originX = 0
Device.originY = 0
psdWidth = 720
psdHeight = 1280
Device.scale = Screen.width / psdWidth

page = new PageComponent
	width: psdWidth
	height: psdHeight
	scrollVertical: false
	parent: Device
	
page.placeBehind(phoneScreen)
#페이지 오버드래그 안되게 / content!!!!! 꼭 넣어줘야함
page.content.draggable.overdrag = false


#addPage 기본설정은 오른쪽으로 페이지 추가 아래로도 할수 있음
page.addPage(txt01)
page.addPage(txt02)
page.addPage(txt03)
page.addPage(txt04)


#네모박스 비스듬히 세워서 눕혀놓기
colorBg = new Layer
	width: psdWidth
	height: psdHeight
	y: 460
	rotation: -70
	backgroundColor: "#00c73c"
	parent: Device #부모 지정해줘여함
	
colorBg.placeBefore(page)
slideBg.visible = false



allIndicator = []

for i in [0...4]
	indicator = new Layer
		borderRadius: "50%"
		backgroundColor: "#ddd"
		width: 12
		height: 12
		x: 28 * i
		y: 72
	indicator.idx = i
	indicator.x += (Screen.width/2) - (12 * 4)
	#가운데 정렬 공식
	allIndicator.push(indicator)
	
	#활성화 states추가
	indicator.states.add
		active: {opacity:1, scale:1.2, backgroundColor: "#448AFF"}
	#첫번째 활성화
	allIndicator[0].states.switchInstant("active")

pageindicator.visible = false
	
	
mask = new Layer
	width: 160
	height: 160
	borderRadius: "50%"
	shadowBlur: 10
	parent: zoom
	clip: true
	
zoomLayer.parent = mask

#states 추가하기
screen01.states.add
	off: {opacity:0}

screen02.states.add
	off: {opacity:0}
	
screen03.states.add
	off: {opacity:0}

zoom.states.add
	off: {x: -300}
	
zoomLayer.states.add
	page03: {x: -230}
	
zoom.states.switchInstant("off")


colorBg.states.add
	page02: {backgroundColor:"#7C4DFF"}
	page03: {backgroundColor:"#FF5252"}
	page04: {backgroundColor:"#448AFF"}
	page05: {scale:4}
	

dragLayer.states.add
	off:{y:psdHeight}
dragLayer.states.switchInstant("off")


page01 = ->
	screen01.states.switch("default")
	zoom.states.switch("off")
	colorBg.states.switch("default")
	
page02 = ->
	screen01.states.switch("off")
	screen02.states.switch("default")
	zoom.states.switch("default")
	zoomLayer.states.switch("default")
	colorBg.states.switch("page02")

page03 = ->
	screen02.states.switch("off")	
	screen03.states.switch("default")
	zoom.states.switch("default")
	zoomLayer.states.switch("page03")
	dragLayer.states.switch("off")
	colorBg.states.switch("page03")
	
page04 = ->
	screen03.states.switch("off")
	screen04.states.switch("default")
	zoom.states.switch("off")
	dragLayer.states.switch("default")
	colorBg.states.switch("page04")


page.on "change:currentPage", ->
	if page.currentPage is txt01
		page01()
	else if page.currentPage is txt02
		page02()
	else if page.currentPage is txt03
		page03()
	else
		page04()
		
	for i in [0...4]
		allIndicator[i].states.switch("default")
		j = page.horizontalPageIndex(page.currentPage)
		if allIndicator[i].idx is j
			allIndicator[i].states.switch("active")
			

			

```
