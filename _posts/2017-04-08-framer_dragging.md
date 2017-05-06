---
layout: post
title: Draging area
tags:
- framer
published: false
---


Framer_draging area : constraints

```javascript

layerA = new Layer
layerA.draggable.enabled = true
 
# Set dragging constraints 
layerA.draggable.constraints =
    x: 0
    y: 0
    width: 200
    height: 200
```

https://framer.cloud/Vclka

<div class="frame_box">
	<iframe src="https://framer.cloud/YtaSy/" frameborder="0" width="100%" height="100%" ></iframe>
</div>

```javascript

bg =  new BackgroundLayer
	backgroundColor: "#eee"

#default Animation
Framer.Defaults.Animation = 
	curve: "cubic-bezier(0.645, 0.045, 0.355, 1)"
	time: 0.3
		
listItem = []
profileItem = []
nameItems = []
messageItems = []

nameItem = ["songssss","HELLO","엄마","아빠","james","kalen","hyomin","jarong","bongs"]

messageItem = ["잠이온다~~~","G","휴가중","신난당","hello~","배고팡","funny","hello","ㅠ.ㅠ","good"]
	
scroll = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false
	
for i in [0...10]

	#친구리스트
	list = new Layer
		width:Screen.width
		height: 140
		borderWidth: 1 #아래만 줄수 있나
		parent: scroll.content
		backgroundColor: "white"
	list.y = list.height * i
	list.idx = i
	listItem.push(list)
	
	list.xPos = list.x
	list.yPos = list.y
	
	#프로필사진
	profile = new Layer
		parent: list
		borderRadius: "50%"
		width: list.height
		scale: 0.7
	profile.height = profile.width
	profile.image = "images/" + i + ".png"
	profileItem.push(profile)
	
	profile.xPos = profile.x
	profile.yPos = profile.y
	
	#이름
	name = new Layer
		parent: list
		x: profile.width
		backgroundColor: null
		html: nameItem[i]
		style: 
			fontSize:"1.2em"
			color:"#222"
			lineHeight:"4.2em"
			textAlign:"left"
	nameItems.push(name)
	
	name.xPos = name.x
	name.yPos = name.y
	
	#이름
	message = new Layer
		parent: list
		x: Align.right -50  
		y: 40
		borderRadius: 10
		height: list.height/2
		backgroundColor: "ffe000"
		html: messageItem[i]
		style: 
			floar:"right"
			fontSize:"1em"
			color:"#222"
			lineHeight:"2em"
			textAlign:"right"
			padding:"0 20px"
			whiteSpace:"nowrap" #width를 텍스트 사이즈만큼
			width:"auto"


# 	message.midY = listItem[i].midY #안됨
	messageItems.push(message)

	message.xPos = message.x
	message.yPos = message.y

isSel = false

#for문 밖에서 불러오기
for listItem_it in listItem

	selectedList = listItem_it
	
	listItem_it.onClick ->
		
		this.bringToFront()
		if isSel is false
			isSel = true
			selectedList.animate
				properties: 
					backgroundColor: "white"
					
			this.animate
				properties:
					backgroundColor:"#ffe000"
					height:Screen.height
					x: this.x - this.screenFrame.x
					y: this.y - this.screenFrame.y
			selectedList = this
			
			profileItem[this.idx].animate
				properties:
					scale: 2
					x: Align.center
					y: 500
				time:0.5
			
			nameItems[this.idx].animate
				properties:
					scale: 2.5
					x: 220
					y: 100
			nameItems[this.idx].style.color = "white"

						
			messageItems[this.idx].animate
				properties:
					scale: 2
					x: Align.center
					y: 1000
					backgroundColor:"white"
			
		else
			isSel = false
			this.animate
				properties:
					backgroundColor:"white"
					height:140
					x: this.xPos
					y: this.yPos
			
			profileItem[this.idx].animate
				properties:
					scale:0.7
					x: profile.xPos
					y: profile.yPos
				
			nameItems[this.idx].animate
				properties:
					scale: 1
					x:name.xPos
					y:name.yPos
			nameItems[this.idx].style.color = "#222"

					
			messageItems[this.idx].animate
				properties:
					scale: 1
					x: message.xPos
					y: message.yPos
					backgroundColor:"#ffe000"

```

cloude
https://framer.cloud/YtaSy

```javascript

bg = new BackgroundLayer
rainW = 20
arr = []

page = new PageComponent
	width: Screen.width
	height: Screen.height
	scrollVertical: false
	
page1 = new Layer
	width: Screen.width
	height: Screen.height
	parent: page.content
	backgroundColor: "white"

page2 = new Layer
	width: Screen.width
	height: Screen.height
	backgroundColor: "skyblue"
	
page3 = new Layer
	width: Screen.width
	height: Screen.height
	backgroundColor: "salmon"
	
page.addPage(page2, "right")
page.addPage(page3, "right")

rain_Wrap = new Layer
	backgroundColor: "transparent"
	width: 180
	rotation: 20
	superLayer: page1.content
rain_Wrap.center()

#rain superLayer
rain_top = new Layer
	backgroundColor: "white"
	x: Align.center
	y: Align.center -80
	height: 90
	superLayer: page1.content


#cloud
cloud_wrap = new Layer
	width: 330
	scale: 0.8
	backgroundColor: "transparent"
	x: Align.center
	y: Align.center -130
	superLayer: page1.content
	
cloud1 = new Layer
	borderRadius: "50%"
	width: 150
	height: 150
	backgroundColor: "#ddd"
	parent: cloud_wrap
	x: 0
	maxY:cloud_wrap.height

cloud2 = new Layer
	borderRadius: "50%"
	width: 200
	height: 200
	backgroundColor: "#ddd"
	parent: cloud_wrap
	maxY: cloud_wrap.height
	x: Align.center
	
cloud3 = new Layer
	borderRadius: "50%"
	width: 130
	height: 130
	backgroundColor: "#ddd"
	parent: cloud_wrap
	maxX:cloud_wrap.width
	maxY:cloud_wrap.height

cloud4 = new Layer
	width: 200
	height: 30
	backgroundColor: "#ddd"
	parent: cloud_wrap
	maxY: cloud_wrap.height
	x: Align.center




for i in [0...6]
	rain = new Layer
		width: 10
		height: 200
		originY: 0
		rotation: 0
		backgroundColor: "skyblue"
		x : (rainW+10) * i
		y : Align.center
		superLayer: rain_Wrap
			
	ani = new Animation
		layer: rain
		properties: 
			scaleY: Utils.randomNumber(0.2, 1)
		time: 0.1
	
	ani.start()
	
	ani.onAnimationEnd ->
		this.properties.scaleY = Utils.randomNumber(0.2,1)
		this.start()
		




```
