---
layout: post
title: Framer code library
tags:
- framer
- coffeescript
---



Framer code library / 자주 쓰이는 프레이머 코드들 정리하기 🐶 


### Basic code sample
레이어 생성

```javascript
layerA = new Layer
	scale:0.5
	opacity: 0.5
	x:0
	y:0
	backgroundColor: "#aaa"

ani = new Animation
	layer:layerA
	properties:
		scale:1.5
		opacity:1
		backgroundColor:"skyblue"
		borderRadius: "100%"
		rotation:360
		x:Align.center
		y:Align.center
	//curve, time 값은 properties 와 같은 선상에
	curve:"spring(67, 8, 3)"
	time:0.8
```

---

### default animation
기본 애니메이션 설정

```javascript
Framer.Defaults.Animation = 
	curve: "spring(80,10,4)"
	time: 0.5
```

---


### psd import
psd 파일 import

```javascript
//PSD file import 하면 자동으로 생기는 코드
psd = Framer.Importer.load("imported/sample@1x")

//psd 레이어를 globalLayers로 설정
Utils.globalLayers(psd)

//가변사이즈 생성
Device.originX = 0
Device.originY = 0
psdWidth = 750
psdHeight = 1344
Device.scale = Screen.width / psdWidth

//또는

Device.width = Screen.width
Device.scale = Screen.width / psdWidth
```

---


### animation reverse
애니메이션 reverse 반복

```javascript
//애니메이션 반복 animation reverse toggle repeat
rec = ani.reverse()
ani.start()

//ani 종료시 revers 저장해둔 rec 실행
ani.onAnimationEnd ->
	rec.start()

//rec 종료시 다시 ani start : 무한반복
rec.onAnimationEnd ->
	ani.start()
```

---

### animation states
애니메이션 상태 추가

#### case 01 - states.next()
```javascript
layer = new Layer
	x:100
	y:100
	scale:0.5

//layer states add 레이어에 상태 추가
layer.states.add
	one:
		x:400
		scale:1
		rotation:180
		backgroundColor: "salmon"
	two:
		y:400
		x:300
		backgroundColor: "pink"
		borderRadius:"100%"
		rotation:-180
		scale:1.3
	three:
		backgroundColor:"skyblue"
		borderRadius:0
		rotation:180
		y:600
		x:200

//default states set 기본 상태 설정
layer.states.switch("one")

//click function 클릭할 때마다 다음 states 전환
layer.onClick ->
	layer.states.next()
```


#### case 02 - if / else if
```javascript
//default states set 기본 상태 설정
layer.states.switch("one")

//현재 states가 무엇인가에 대해 조건문
layer.onAnimationEnd ->
	if layer.states.current is "one"
		layer.states.switch("two")
	else if layer.states.current is "three"
		//default로 가도록
		layer.states.switch("default")
	else
		layer.states.next()
```

#### case 03 - onStateDidSwitch
```javascript
layer.onClick ->
	layer.states.switch("one")

//현재 states가 변하면 default 값으로 돌아감
layer.onStateDidSwitch ->
	layer.states.switch("default")
```


---


### Touch & Drag Event
터치이벤트

```javascript
.onTouchStart (event, layer) ->
	this.animate
		rotation: 360
.onDragMove ->

.onDragEnd ->
```

---

### ETC
기타 자주 사용하는 문법들

```javascript
//PSD import - layers임, s 꼭 붙이스
Utils.globalLayers(psd)

//random color 랜덤컬러
layer.backgroundColor = Utils.randomColor(1)
layer.backgroundColor = Utils.randomColor(0)

//states setting at start "switchInstant" : 시작할 때 아웃인상태로 시작해라
circle.states.switchInstant("out")

//click hinting area 클릭영역 보라색선 안보이게 ★★★
Framer.Extras.Hints.disable()

업데이트 하고 어느순간 부터 클릭할때마다 영역에 보라색 선이 생겼음
이게뭔가 했는데 클릭할수 있는 영역을 힌트로 제공하는 기능
보라색선이 너무 거슬려.... 꼭 추가하는 코드


//delay
Utils.delay 1, ->

//clip 클리핑 마스크 : 자식요소가 더 크더라도 부모 요소만큼 보여줌
clip.true

//해당 레이어 뒤로
layerC.placeBeheind(layerB)

//뒤로
this.sendToback()

//앞으로
this.bringToFront()

//child 자식요소
layerA.parent = layerB
layerB.addChild(layerA)
layerA.superLayer = layerB

//drag set 드래그 가능
layer.draggable.enabled = true

//drag area limitation 드래그 영역 제한
layer.draggable.enabled = true

//vertical drag lock : 세로 드래깅 락 (좌우로만 움직임)
layer.draggable.vertical = false

//constraints 드래그 할수 있는 영역
layer.draggable.constraints = 
	width:Screen.width
	height:Screen.height

//onMove 레이어가 움직일때 실행
layer.onMove ->
	//velocity 속도
	print layer.draggable.velocity 
	//direction 방향
	print layer.draggable.direction 
	//angle 각
	print layer.draggable.angle 

//screenFrame 현재 디바이스의 절대좌표, 그만큼을 빼서 붙도록 함
x:this.x - this.screenFrame.x
y:this.y - this.screenFrame.y

//modulate 모듈레이트
layer.opacity = Utils.modulate(layer.x, [0,Screen.width/2], [1,0], true)
첫번째 범위 : x좌표값이 0 부터 화면 width 의 절반으로 변할때
두번째 범위 : 바꿀값 (screen width 1/2에 가까워질수록 0으로 투명해짐)

//ex.Tinder 틴더
card.opacity = Utils.modulate(card.midX, [Screen.width/2, 0], [1,0], true)
card.rotation = Utils.modulate(card.midX, [Screen.width/2, 0], [0, -10], true)

//for 반복문
for i in[0...5]

//center 중앙정렬
layer.center()

//scroll contentInset padding 스크롤의 패딩 값
scroll.contentInset =
	left: -215
	right: -215
```

---

### for in 
반복문

---
