---
layout: post
title: framer_tripic
tags:
- framer
---



framer project Tripic : photo sharing platform




```javascript

Framer.Extras.Hints.disable()
bg = new BackgroundLayer
# Import file "view01"
psd = Framer.Importer.load("imported/view01_tab@1x")

psd0 = Framer.Importer.load("imported/view00@1x")

psd2 = Framer.Importer.load("imported/view01@1x")

psd3 = Framer.Importer.load("imported/view03@1x")


Utils.globalLayers(psd)
Utils.globalLayers(psd0)
Utils.globalLayers(psd2)
Utils.globalLayers(psd3)

wrap.originX = 0
wrap.originY = 0
psdWidth = 750
psdHeight = 1344
wrap.scale = Screen.width / psdWidth


pages = []
page_wrap = new Layer
	width: Screen.width
	height: Screen.height
	parent: wrap

for number in [0...4]
	pageContent = new Layer
		width: Screen.width
		height: Screen.height
		parent: page_wrap
		backgroundColor: "white"
		scrollVertical:false
	pages.push(pageContent)

# scroll_wrap = new ScrollComponent
# 	width: Screen.width
# 	scrollHorizontal: false
# 	parent:pages[0]
# 	directionLock: true


gnb.placeBefore(page_wrap)
tab.placeBefore(page_wrap)



#tab setting
tab02_o.visible = false
tab03_o.visible = false
tab04_o.visible = false
tab01.visible = false
tab01_o_.visible = true

pages[0].visible = true
pages[1].visible = false
pages[2].visible = false
pages[3].visible = false

change_tab01 = ->
	tab01.visible = false
	tab01_o_.visible = true
	tab02.visible = true
	tab03.visible = true
	tab04.visible = true
	tab02_o.visible = false
	tab03_o.visible = false
	tab04_o.visible = false
	pages[0].visible = true
	pages[1].visible = false
	pages[2].visible = false
	pages[3].visible = false

change_tab02 = ->
	tab02.visible = false
	tab02_o.visible = true
	tab01.visible = true
	tab03.visible = true
	tab04.visible = true
	tab01_o_.visible = false
	tab03_o.visible = false
	tab04_o.visible = false
	pages[0].visible = false
	pages[1].visible = true
	pages[2].visible = false
	pages[3].visible = false
	
change_tab03 = ->
	tab03.visible = false
	tab03_o.visible = true
	tab01.visible = true
	tab02.visible = true
	tab04.visible = true
	tab01_o_.visible = false
	tab02_o.visible = false
	tab04_o.visible = false
	pages[0].visible = false
	pages[1].visible = false
	pages[2].visible = true
	pages[3].visible = false
	
change_tab04 = ->
	tab04.visible = false
	tab04_o.visible = true
	tab01.visible = true
	tab02.visible = true
	tab03.visible = true
	tab01_o_.visible = false
	tab02_o.visible = false
	tab03_o.visible = false
	pages[0].visible = false
	pages[1].visible = false
	pages[2].visible = false
	pages[3].visible = true


tab01.onClick ->
	change_tab01()
	
tab02.onClick ->
	change_tab02()
	
tab03.onClick ->
	change_tab03()
	map_circle.animate
		properties: 
			opacity:0.5
			scale:1.1
		time:0.4
		
	map_circle.onAnimationEnd ->
		map_circle.animate
			properties:
				opacity:1
				scale:1
			time:0.5
			
tab04.onClick ->
	change_tab04()
	
# Section VIEW 01

view01_scroll = new ScrollComponent
	width: Screen.width
	height: Screen.height-tab.height
	scrollHorizontal: false
	parent: pages[0]
	directionLock: true

main.parent = view01_scroll.content

a_pages = []
a01.visible = false
abroad_page = new PageComponent
	width: main.width
	height: photo_bg.height
	parent: abroad
	scrollVertical: false
	directionLock: true

for i in[0...8]
	layer = new Layer
		width: a01.width
		height: a01.height
		parent: abroad_page.content
		image: "images/a0"+i+".png"
		scale:0.7
		opacity: 0.5
	layer.midY = abroad_page.midY - 10
	layer.x = (layer.width-100) * i
	a_pages.push(layer)

a_pages[0].opacity = 1
a_pages[0].scale = 0.95


	
for i in[0...8]
	info = new Layer
		width: 204
		height: 204
		image: "images/info-"+i+".png"
		parent: a_pages[i]
		scale: 0.84

indicators = []
indi_wrap = new Layer
	height: 50
	width: 290
	backgroundColor: "transparent"
	y: Align.bottom
	x: Align.center
	parent: abroad_page
	
for i in [0...8]
	indicat = new Layer
		width: 20
		height: 20
		borderRadius: "50%"
		backgroundColor: "#666"
		opacity: 0.5
		x: 40 * i
		parent: indi_wrap
		
	indicators.push(indicat)

indicators[0].opacity = 1
indicators[0].backgroundColor = "white"

# Fade in the most centered page
abroad_page.onChange "currentPage", ->
	abroad_page.previousPage.animate 
		properties:
			opacity: 0.5
			scale: 0.7
		time: 0.5
	abroad_page.currentPage.animate 
		properties:
			scale: 0.95
			opacity: 1
		time: 0.5
		
	#인디케이터
	for indi in indicators
		indi.animate
			properties:
				opacity: 0.3
				backgroundColor:"#666"
 
	current = abroad_page.currentPage
	i = abroad_page.horizontalPageIndex(current)
	
	indicators[i].animate
		properties:
			opacity: 1
			backgroundColor:"white"

#korea
k_pages = []
korea_page = new PageComponent
	width: main.width
	height: photo_bg.height
	parent: korea
	scrollVertical: false
	directionLock: true
	
for i in[0...8]
	layer2 = new Layer
		width: a01.width
		height: a01.height
		parent: korea_page.content
		image: "imported/view01@1x/images/k0"+i+".png"
		scale:0.7
		opacity: 0.5
	layer2.midY = korea_page.midY - 10
	layer2.x = (layer2.width-100) * i
	k_pages.push(layer2)

k_pages[0].opacity = 1
k_pages[0].scale = 0.95

#인기 여행지
hotspot.image = "none"
scrollPlace = new ScrollComponent
	width: hotspot.width
	height: hotspot.height
	y: -20
	scrollVertical: false
	parent: hotspot

scrollPlace.contentInset = 20
	
for i in [0...9]
	place = new Layer
		borderRadius: 10
		x: 300*i
		height: 280
		width: 280
		parent: scrollPlace.content
		image: "images/place0" + i + ".png"
		

for i in[0...8]
	info = new Layer
		width: 204
		height: 204
		image: "images/info-"+(7+i)+".png"
		parent: k_pages[i]
		scale: 0.84

indicators2 = []
indi_wrap2 = new Layer
	height: 50
	width: 290
	backgroundColor: "transparent"
	y: Align.bottom
	x: Align.center
	parent: korea_page
	
for i in [0...8]
	indicat2 = new Layer
		width: 20
		height: 20
		borderRadius: "50%"
		backgroundColor: "#666"
		opacity: 0.5
		x: 40 * i
		parent: indi_wrap2
		
	indicators2.push(indicat2)

indicators2[0].opacity = 1
indicators2[0].backgroundColor = "white"

# Fade in the most centered page
korea_page.onChange "currentPage", ->
	korea_page.previousPage.animate 
		properties:
			opacity: 0.5
			scale: 0.7
		time: 0.5
	korea_page.currentPage.animate 
		properties:
			scale: 0.95
			opacity: 1
		time: 0.5
		
	#인디케이터
	for indi2 in indicators2
		indi2.animate
			properties:
				opacity: 0.3
				backgroundColor:"#666"
 
	current = korea_page.currentPage
	i = korea_page.horizontalPageIndex(current)
	
	indicators2[i].animate
		properties:
			opacity: 1
			backgroundColor:"white"


zoom_wrap = new Layer
	width: Screen.width
	height: Screen.height
	y: 100
	backgroundColor: "white"
	opacity: 0
	parent: pages[0]
	visible: false
	
photo_zoom = new Layer
	width: 755
	height: 1125
	image: "images/photo_zoom.png"
	parent: zoom_wrap

a_pages[0].onClick ->
	zoom_wrap.visible = true
	zoom_wrap.animate
		properties: 
			opacity: 1
			
zoom_wrap.onClick ->
	zoom_wrap.animate
		properties: 
			opacity: 0
	Utils.delay 1, ->
		zoom_wrap.visible = false


# Section VIEW 02
bubble_page = new ScrollComponent
	width: Screen.width
	height: Screen.height-tab.height*2
	y:gnb.height
	scrollHorizontal: false
	directionLock: true
	parent: pages[1]
	
items = new Array()
circle = [
	#홀로 둘 셋 단체
	{x:40,y:46,w:100},
	{x:51,y:220,w:150},
	{x:154,y:112,w:100},
	{x:204,y:302,w:101},
	
	 #엄마랑 친구랑 가족 지인
	{x:452,y:113,w:221},
	{x:266,y:24,w:131},
	{x:278,y:172,w:154},
	{x:367,y:328,w:154},
	
	#풍경 인물 봄 여름 가을 겨울
	{x:660,y:46,w:140},
	{x:671,y:220,w:150},
	{x:804,y:112,w:100},
	{x:804,y:332,w:131},
	{x:1112,y:113,w:221},
	{x:896,y:24,w:131},
	
	#유럽 동남아 미국 중국 바다 산
	{x:898,y:172,w:204},
	{x:1067,y:328,w:154},
	{x:1290,y:46,w:100},
	{x:1331,y:240,w:150},
	{x:1384,y:112,w:100},
	{x:1434,y:302,w:101}
]

b_scroll = new ScrollComponent
	width: Screen.width
	height: 500
	scrollVertical: false
	parent: bubble_page.content
	directionLock: true

b_scroll.on Events.Move, ->
	for i in [0...items.length ]
		dx = Utils.modulate( items[i].screenFrame.x, [Screen.width , Screen.width - items[i].width], [0, 1], true )
 		
		items[i].opacity = items[i].opacity + ( dx - items[i].opacity ) * 0.1
		items[i].scale = items[i].scale + ( dx - items[i].scale ) * 0.1

circleLabel = ["혼자","둘","셋","단체","엄마랑","가족","친구랑","지인","풍경","인물","봄","여름","겨울","가을","유럽","동남아","미국","중국","바다","산"]
		
for i in [ 0...circle.length]
	layer = new Layer()
	layer.borderRadius = "50%"
	layer.superLayer = b_scroll.content
	layer.backgroundColor = "transparent"	
	layer.idx = i
	layer.x = circle[i].x
	layer.y = circle[i].y
	layer.width = circle[i].w
	layer.height = circle[i].w
	layer.html = circleLabel[i]
	layer.style = {color:"#6181c5", textAlign:"center", fontSize:"1.5em", lineHeight:"3.5"}
	layer.borderWidth = 5
	layer.borderColor = "#6181c5"
	items.push( layer )


	#선택시 색상
	items[i].states.add
		select: {backgroundColor:"#389afd"}
		select2:{backgroundColor:"#6ecaf3"}
		normal: {backgroundColor:"#transparent"}
	items[i].states.switchInstant("normal")
	
	items[i].onClick ->
		if this.states.current is "normal"
			this.states.switch("select")
			this.style = {color:"white"}
		else
			this.states.switch("normal")
			this.style = {color:"#389afd"}

	items[0].onClick ->
		if this.states.current is "normal"
			this.states.switch("select2")
			this.style = {color:"white"}
		else
			this.states.switch("normal")
			this.style = {color:"#6ecaf3"}
		
		
			
checkItems1 = false
items[1].onClick ->
	if checkItems1 is false
		checkItems1 = true
		this.animate
			properties:
				backgroundColor: "#6ecaf3"
	else
		checkItems1 = false
		this.animate
			properties:
				color: "#6ecaf3"
		
checkItems4 = false
items[4].onClick ->
	if checkItems4 is false
		checkItems4 = true
		this.animate
			properties:
				backgroundColor: "#6ecaf3"
	else
		checkItems4 = false
		this.animate
			properties:
				color: "#6ecaf3"
		
checkItems14 = false
items[14].onClick ->
	if checkItems14 is false
		checkItems14 = true
		this.animate
			properties:
				backgroundColor: "#4d6fbd"
	else
		checkItems14 = false
		this.animate
			properties:
				color: "#4d6fbd"
		
		
		
#circleLabel = ["혼자","둘","셋","단체","엄마랑","가족","친구랑","지인","풍경","인물","봄","여름","가을","겨울","유럽","동남아","미국","중국","바다","산"]

items[0].style = {lineHeight:"2.2", borderColor:"#6ecaf3", color:"#6ecaf3"}
items[1].style = {borderColor:"#6ecaf3", color:"#6ecaf3"}
items[2].style = {lineHeight:"2.2",borderColor:"#6ecaf3", color:"#6ecaf3"}
items[3].style = {lineHeight:"2.2",borderColor:"#6ecaf3", color:"#6ecaf3"}
items[4].style = {lineHeight:"4.6",borderColor:"#6ecaf3", color:"#6ecaf3"}

items[5].style = {borderColor:"#389afd", color:"#389afd"}
items[6].style = {borderColor:"#389afd", color:"#389afd"}
items[7].style = {borderColor:"#389afd", color:"#389afd"}
items[8].style = {borderColor:"#389afd", color:"#389afd"}
items[9].style = {borderColor:"#389afd", color:"#389afd"}

items[10].style = {lineHeight:"2.2"}
items[11].style = {lineHeight:"3"}
items[12].style = {lineHeight:"4.7",borderColor:"#389afd", color:"#389afd"}
items[13].style = {lineHeight:"3"}

items[14].style = {lineHeight:"4.7",}
items[16].style = {lineHeight:"2.2",borderColor:"#6ecaf3", color:"#6ecaf3"}
items[18].style = {lineHeight:"2.2",borderColor:"#389afd", color:"#389afd"}
items[19].style = {lineHeight:"2.2"}



	
bubble_page.onMove ->
	b_scroll.scale = Utils.modulate(bubble_page.scrollY, [0,700],[1,0.6], true)
	b_scroll.y = Utils.modulate(bubble_page.scrollY, [0,400],[0,150], true)
	


# Variables
tileCount = 18
columnCount = 3
gutter = 8

combinedGutterWidth = gutter * (columnCount - 1)
combinedTileWidth = Screen.width - combinedGutterWidth
tileWidth = combinedTileWidth / columnCount
tileOffset = tileWidth + gutter

scroll = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
	parent: bubble_page.content
	y:b_scroll.height

# Loop to create grid tiles
for index in [0...tileCount]
	
	columnIndex = index % columnCount
	rowIndex = Math.floor(index / columnCount)
	
	tile = new Layer
		x: columnIndex * tileOffset
		y: rowIndex * tileOffset
		size: tileWidth
		borderRadius: 4
		parent: scroll.content
	tile.image = "images/gal0"+index+".png"


# Section VIEW03
maps.parent = pages[2]
maps.y = gnb.height
map_tab.y = Align.top

map_circle.opacity = 0
map_circle.scale = 0.8
		

# Section VIEW04
pro_wrapper = new ScrollComponent
	width: Screen.width
	height: Screen.height-tab.height*2
	scrollHorizontal: false
	parent:pages[3]
	y:gnb.height
	directionLock: true
	
pro_wrap = new Layer
	width: Screen.width
	height: Screen.height
	parent: pro_wrapper.content
	
pro_bg = new Layer
	backgroundColor: "#efefef"
	width: Screen.width
	height: Screen.height
	parent: pro_wrap
	
profile = new Layer
	width: 755
	height: 671
	y: Align.top
	image: "images/profile.png"
	parent: pro_wrap

# Variables
tileCount = 9
columnCount = 3
gutter = 8

combinedGutterWidth = gutter * (columnCount - 1)
combinedTileWidth = Screen.width - combinedGutterWidth
tileWidth = combinedTileWidth / columnCount
tileOffset = tileWidth + gutter

pick_place = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
	y:profile.height
	parent: pro_wrap

# Loop to create grid tiles
for index in [0...tileCount]
	
	columnIndex = index % columnCount
	rowIndex = Math.floor(index / columnCount)
	
	tile = new Layer
		x: columnIndex * tileOffset
		y: rowIndex * tileOffset
		size: tileWidth
		borderRadius: 4
		parent: pick_place.content
	tile.image = "images/place0"+index+".png"


# Intro

intro.parent = wrap
intro.bringToFront()


tripic_logo.opacity = 0
tripic_logo.scale = 0
img_map.opacity = 0
img_map.scale = 2

img_map.animate
	properties:
		opacity:1
		scale:1
		
Utils.delay 0.2, ->
	tripic_logo.animate
		properties:
			opacity:1
			scale:1
		time:0.5

Utils.delay 3.5, ->
	intro.animate
		properties:
			opacity:0
		time:1
			
Utils.delay 4.3, ->
	intro.visible = false


```
