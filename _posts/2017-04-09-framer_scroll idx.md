---
layout: post
title: scrollComponent + idx
tags:
- framer
- scroll
---

Framer_scrollComponent + idx

스크롤 컴포넌트 클릭하면 해당 페이지 확대


### scrollComponent + idx

```javascript
Framer.Extras.Hints.disable()

arr = []
#불린값 설정 다시클릭하면 돌아가게 버튼
isSel = false

scroll = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollVertical: false

for i in [0..5]
	layer = new Layer
		width: 500
		height: 700
		y: Align.center
		backgroundColor: Utils.randomColor(1)
		parent: scroll.content

	layer.x = layer.width * i
	
	#idx값 받아서 현재 클릭된것 발라내기위함
	layer.idx = i
	
	#클릭 후 원래위치로 복귀
	layer.xPos = layer.x
	layer.yPos = layer.y
	
	arr.push(layer)
	
	layer.onClick ->
		if isSel == false
			isSel = true
			scroll.scrollHorizontal = false #스크롤막아줌
			this.bringToFront()  #클릭 된 레이어가 최상위로
			
			#이제 배열값 받아서 나머지것들이랑 구분해서 효과
			for i in [0..5]
				if i is this.idx
					this.animate
						properties:
							width:Screen.width
							height:Screen.height
							
							#screenFrame 현재 디바이스의절대좌표, 그만큼을 빼줘서 붙도록
							x:this.x - this.screenFrame.x
							y:this.y - this.screenFrame.y
						curve : "cubic-bezier(0.19, 1, 0.22, 1)"
					
				else #클릭안된나머지것들 작고 불투명하게
					arr[i].animate
						properties:
							scale:0.7
							opacity:0.5
						curve:"spring"
						
		#원래대로 돌아가게 isSel이 true인 상태 레이어열려잇음
		else
			isSel = false
			scroll.scrollHorizontal = true  #스크롤 다시 살림
			
			#여기서도 배열값 받아서 나머지것들이랑 구분해서 효과
			for i in [0..5]
				if i is this.idx  #지금 확장된 레이어
					this.animate
						properties:
							width:500
							height:700
							x:this.xPos
							y:this.yPos
						curve : "cubic-bezier(0.19, 1, 0.22, 1)"
				else
					arr[i].animate
						properties:
							scale:1
							opacity:1
						curve:"spring"
```
