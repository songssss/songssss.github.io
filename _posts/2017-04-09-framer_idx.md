---
layout: post
title: arr idx
tags:
- framer
- idx
---

Framer_for in  idx arr push layer

arr.push(layer)

1.배열만들기

2.for문 안에서 idx값을 저장

3.배열에 레이어들 추가 arr.push(layer)


### for in + array + idx

```javascript
//color change only selected 선택한 것만 색상변화
arr = []
for i in [0..4]
	layer = new Layer
		x:Align.center
		y:250 * i + 50

	//배열번호 index값 idx에 저장
	layer.idx = i
	//arr 배열에 넣어줌
	arr.push(layer)

	layer.onClick ->
		for i in [0..4]
			if i is this.idx
				arr[i].animate
					properties:
						backgroundColor:"salmon"
						scale:1.1
			else
				arr[i].aniamte
					properties:
						backgroundColor:"skyblue"
						scale:1
```
