---
layout: post
title: Animations
tags:
- animation
- css
- tweenmax
---


css & javascript animation

css와 자바스크립트 애니메이션

[reference / google web fundamentals Animation](https://developers.google.com/web/fundamentals/design-and-ui/animations/css-vs-javascript){:target="_blank"}

---

### CSS animation

UI요소 상태 전환같은 원샷 전환에 사용 / 상태제어는 자바스크립트를 사용


---

### Javascript animation

web animations API or framework

- jQuery / animate() 메서드

- GreenSocks / TweenMax, TweenLite

애니메이션을 세밀하게 제어해야 하는 경우

(바운스, 중지, 일시 중지, 되감기, 감속 등 고급 효과)


---

### CSS / toggleClass

토글 클래스 

```javascript
$('.btn').on('click', function(){
	$(this).next().toggleClass('move');
});
```

```css
.box{
transition:all .3s;
}

.box.move{
transform:translate(200px, 0) scale(1.2);
transform-origin:bottom right;
}


/* matrix */
.box.move{
transform:matrix(1.5, 0.5, 0, 1.5, 60, 0);
}
/*matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())*/

/* transition */
.ease01{
transition:all .5s ease-out;
}
```


---

### CSS Keyframes

개별 애니메이션 키프레임, 기간 및 반복을 세밀하게 제어

특정 동작 프레임을 만든 후 키프레임 사이에 개별 프레임을 그려 넣는 방식

주어진 시점에서 css속성이 어떤 값을 가져야 하는지 브라우저에게 알려주고 그 간격을 채움

ex1) 클릭 같은 사용자 상호작용 없이 무한 반복으로 애니메이션 효과

ex2) 여러 속성을 동시에 변경

animation-name 속성을 사용하여 필요한 애니메이션을 선택


#### Browser Support

IE10 +

최신 브라우저 대부분 prefix 없이 지원

-webkit- safari, safari mobile 및 android에서 사용



```css
.keyfr01{
	animation-name:movingBox;
	animation-duration:2s;
	animation-iteration-count:infinite;
	animation-direction: alternate; /*set animate end reverse direction*/
}

@keyframes movingBox{
  0% {
    transform: translate(0, 0);
    opacity: 0.3;
  }

  25% {
    opacity: 0.9;
  }

  50% {
    transform: translate(100px, 100px);
    opacity: 0.2;
  }

  100% {
    transform: translate(30px, 30px);
    opacity: 0.8;
  }
}
```

---

### Easing

자연스러운 모션은 앱 사용자에게 편안한 느낌을 주고 전반적인 사용 환경을 개선

짧게 유지할 수 있는 경우를 제외하고 애니메이션을 자제


#### easing 키워드

**linear** / 선형

시간 경과에 따라 값이 균일하게 증가, 로봇처럼 부자연 스러운 느낌으로 사용자가 불편함을 느낄 수 있음
일반적으로 선형 모션을 피한다


**ease-out** / 빠르게 시작하며 마지막에 감속

빠른 시작으로 애니메이션에 반응 효과를 주면서 마지막에 자연스러운 감속 효과를 나타내어 일반적으로 사용자 인터페이스 작업에 가장 적합


**ease-in** / 느리게 시작했다가 빠르게 끝남

ex)무거운 돌이 떨어지는 것처럼 느리게 시작, 낮은 쿵 소리와 함께 빠르게 지면을 때리는 효과

상호작용 관점에서 갑작스럽게 끝나기 때문에 부자연스러운 느낌이 들수 있다

실제 움직임은 갑자기 멈추는 것이 아니라 감속하는 경향이 있기 때문

또한 시작시 굼뜨게 움직이는 듯한 효과로 반응 인지에 부정적 역향을 미칠 수 있음


**ease-in-out** / 느린 시작, 빠른 중간, 느린 종료

차량의 가속 및 감속과 유사

적절히 조합하여 사용하면 easing out보다 더욱 드라마틱한 효과 제공

애니메이션 대비가 증가하여 사용자에게 만족감을 줄 수 있음


#### custom easing

cubic bezier / 3차원 베지어 곡선

```css
.cubic{
transition:all .5s cubic-bezier(0.465, 0.183, 0.153, 0.946);
}
```
1. 첫번째 제어점 : 오른쪽 하단영역에 있으면 느리게 시작, 왼쪽상단에 있으면 빠르게 시작 

2. 두번째 제어점 : 오른쪽 하단영역에 있으면 빠르게 끝, 왼쪽상단에 있으면 느리게 끝

---

### Javascript library TweenMax / TweenLite

자바스크립트 애니메이션 라이브러리 트윈맥스, 트윈라이트

javascript library for high-performance HTML5 animation in all major browser

3차원 베지어 곡선이 제공하는 것보다 더욱 세밀한 제어가 필요한 경우

ex)탄성 바운스


#### 장점

작은 자바스크립트 라이브러리로 풍성한 코드 베이스 제공

뛰어난 퍼포먼스

초경량으로 유지하기를 원할 경우 TweenLite

scale, rotate, skew 쉽게 구현

다양한 easing 제공

애니메이션 제어 

```javascript
function animate1(){
	TweenMax.from($('.item01'), 5, {opacity:0});
}

function animate2(){
	TweenMax.from( $( ".item02" ), 1, { rotation: 180, x:100, ease:Elastic.easeOut } );
}


function animate3(){
	TweenMax.to(".item03", 1, { 
		scale: function(){
			return Math.random()*1.2;
		},
		rotation: function(){
			return Math.random()*360;
		}
	});
}

function animate4(){
	TweenMax.fromTo(".item04",1,{x:10, delay:1}, {x:50, y:30});
}

function animate5(){
	move = TweenMax.to(".item05", 1 , {x:100, rotation:180, scale:1.5});
	//after 1 second into the 3-second animations
	TweenMax.delayedCall(1, reverse)

	function reverse(){
		move.reverse();
	}
}

function animate6(){
	// item06 : repeat:-1
	var box = document.getElementById("item06"),
		count = 0,
		tween;

	tween = TweenMax.to(box, 2, {x:100, repeat:10, yoyo:true, onRepeat:onRepeat, repeatDelay:0.5, ease:Linear.easeNone});

	function onRepeat() {
	  count++;
	  box.innerHTML = count;
	  TweenLite.set(box, {backgroundColor:"hsl(" + Math.random() * 255 + ", 90%, 60%)"});
	}
}


function animate7(){
	// item07 : repeat:-1
	TweenMax.to(".item07",1,{x:50, yoyo:true, repeat:-1});
}

function animate8(){
	// item08 : play
	var box8 = $('.item08');
	tween = new TimelineLite();
	tween.to(box8, 1, {x:30});
	tween.to(box8, 1, {y:30});
	tween.to(box8, 1, {x:0, y:0, backgroundColor:'#aaa'});
}

function animate9(){
	// item09 : same animation play
	var box1 = $('.item09_1');
	var box2 = $('.item09_2');
	var box3 = $('.item09_3');

	tween = new TimelineLite();
	tween.staggerTo([box1,box2,box3], 1, {rotation:180},0.5);
}

function animate10(){
	// item10 : same animation play yoyo // TimelineMax
	var box1 = $('.item10_1');
	var box2 = $('.item10_2');
	var box3 = $('.item10_3');

	tween10 = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0.5});
	tween10.staggerTo([box1,box2,box3], 1, {rotation:180, borderRadius:'50%', backgroundColor:'#4169e1'},0.5);
}animate10();


function animate11(){
	var box1 = $('.item11');

	TweenMax.from(box1,1,{scale:2, opacity:0, rotation:360, ease:Back.easeOut});
} 

		
function animate12(){
	var obj1 = $('.item12_1');
	var obj2 = $('.item12_2');
	var obj3 = $('.item12_3');

	var objects = [obj1,obj2,obj3];


	TweenMax.staggerFrom(objects,5,{scale:2, opacity:0, rotation:360, ease:Elastic.easeOut}, .4);
} 


//item13
window.onload = function(){

	var box = document.getElementById("item13");
	var x = 0;
	var fn = setInterval(function(){
		var value = x*0.1;
		var left = 50 + Math.floor(Math.sin(value)*40);
		var top = 50 + Math.floor(Math.cos(value)*20);
		var width = 50 + Math.floor(Math.cos(value)*30);
		var height = 50 + Math.floor(Math.cos(value)*30);
		box.style.left = left + "px";
		box.style.top = top + "px";
		box.style.width = width + "px";
		x++;
	}, 30);

}
```

---


### 3D CSS  

3D 관련 CSS속성

#### perspective

관찰자의 시점(perspective)을 정함으로서 3D공간을 구성하고, 2D 엘리먼트(element)가 그 공간안에서 어떻게 동작할지 설정

엘리먼트가 사용자로부터 멀어질수록 작아진다.

작은 값을 지정할수록 원근감이 깊어진다.

부모 요소에 지정


[Reference : Mozilla web docs](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms){:target="_blank"}


```css
.item_wrap{
	width:300px;
	perspective:500px;
	margin-left:20px;
}
```

---

#### transform-origin

요소의 변형 원점 위치 지정

default는 50% 50% center

```css
.item_wrap.org1{
	perspective-origin: 0 0; /* top left */
}
.item_wrap.org2{
	perspective-origin: 50% 0; /* top center */
}
.item_wrap.org3{
	perspective-origin: 100% 0; /* top right */
}
```

---


#### transform-style:preserve-3d

중첩 요소를 3D 공간에 렌더링하는 방법을 정의

perspective 속성은 직계 자식에만 적용 preserve-3d를 통해 관점유지

transform-style 속성은 요소가 2D에서 동작할 것인지 또는 3D에서 동작할 것인지 명시

기본값은 flat, 속성에 preserve-3d값을 적용하면 전환되는 요소의 자식요소가 부모와 동일한 관점과 3D 구현 상황에서 동작

html

```html
<section>
	<a class="btn addAnim" href="#none">addClass</a>
	<div class="item_wrap">
		<div class="pre_wrap">
			<div class="item pers3">preserve-3d</div>
		</div>
	</div>
	<div class="code">
		Perspective / transform-style : preserve-3d
	</div>
</section>
```

css

```css
.item_wrap{
	width:300px;
	perspective:500px;
	margin-left:20px;
}
.pre_wrap{
transform-style:preserve-3d;
transform:rotateY(30deg);
}

.pers3{
width:100px;
height:100px;
transition:all .5s cubic-bezier(0.23, 1, 0.32, 1);
transform-origin:50% 0%; /* top center */
}

.move .pers3{
transform:rotateX(65deg);
}
```

---

#### backface-visibility

사용자를 마주 볼 때 변형된 요소의 뒷면(반대쪽)을 표시할지 여부

변형되지 않은 요소의 경우 요소의 앞면이 사용자를 향하도록 표시

html

```html
<section>
	<div class="card_wrap">
		<div class="card">
			<div class="back">back</div>
			<div class="front">front</div>
		</div>
	</div>
	<div class="code">
		Perspective / backface
	</div>
</section>
```

css

```css
.card_wrap{
width:80px;
height:80px;
perspective:400px;
margin-bottom:30px;
}
.card_wrap .card{
transition: 2s;
transform-style:preserve-3d;

}

.card_wrap:hover .card{
transform:rotateY(-180deg);
}

.card_wrap .card > div{position:absolute; width:80px; height:80px; 
backface-visibility:hidden;
color:#fff;
}

.card_wrap .card .back{
background:skyblue; 
}

.card_wrap .card .front{
background:royalblue;
transform:rotateY(-180deg); /* set */
}
```



[Reference msdn library](https://msdn.microsoft.com/ko-kr/library/hh673529(v=vs.85).aspx){:target="_blank"}


<div class="frame_box2" style="height:800px; tansform:scale(0.8);">
	<iframe id="ifr" src="https://songssss.github.io/project/interact/170519_animation/" frameborder="0" width="100%" height="100%" ></iframe>
</div>


<script>
 function resize_frame(id) {

 var frm = document.getElementById("ifr");

 function resize() {

 var ms_ie = false;

  var ua = window.navigator.userAgent;

  var old_ie = ua.indexOf('MSIE ');

  var new_ie = ua.indexOf('Trident/');

 

  if ((old_ie > -1) || (new_ie > -1)) {

   ms_ie = true;

  }

 

  if ( ms_ie ) {

   //IE specific code goes here

  var iframeHeight=frm.contentWindow.document.body.scrollHeight;

  frm.height=iframeHeight+20;

  }else{

  frm.style.height = "auto"; // set default height for Opera

  contentHeight = frm.contentWindow.document.documentElement.scrollHeight;

  frm.style.height = contentHeight + 23 + "px"; // 23px for IE7

  }

 }

 if (frm.addEventListener) {

 frm.addEventListener('load', resize, false);

 } else {

 frm.attachEvent('onload', resize);

 }

}

resize_frame('ifr'); 
</script>


