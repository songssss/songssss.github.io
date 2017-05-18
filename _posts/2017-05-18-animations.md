---
layout: post
title: Animations
tags:
- animation
- css
- tweenmax
published: true
---


css & javascript animation

css와 자바스크립트 애니메이션

[reference / google web fundamentals Animation](https://developers.google.com/web/fundamentals/design-and-ui/animations/css-vs-javascript){:target="_blank"}

---

### css animation

UI요소 상태 전환같은 원샷 전환에 사용 / 상태제어는 자바스크립트를 사용


---

### javascript animation

web animations API or framework

- jQuery / animate() 메서드

- GreenSocks / TweenMax, TweenLite

애니메이션을 세밀하게 제어해야 하는 경우

(바운스, 중지, 일시 중지, 되감기, 감속 등 고급 효과)


---

### css / class toggle

토글클래스 

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
/* transform:rotate(60deg) translate(100px, 0) scale(1.2); */
/*matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())*/
transform:matrix(1.5, 0.5, 0, 1.5, 60, 0);
}


/* transition */
.ease01{
transition:all .5s ease-out;
}
```


---

### css Keyframes

개별 애니메이션 키프레임, 기간 및 반복을 세밀하게 제어

특정 동작 프레임을 만든 후 키프레임 사이에 개별 프레임을 그려 넣는 방식

주어진 시점에서 css속성이 어떤 값을 가져야 하는지 브라우저에게 알려주고 그 간격을 채움

ex1) 클릭 같은 사용자 상호작용 없이 무한 반복으로 애니메이션 효과
ex2) 여러 속성을 동시에 변경

animation-name 속성을 사용하여 필요한 애니메이션을 선택


#### Browser support

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

### easing

자연스러운 모션은 앱 사용자에게 편안한 느낌을 주고 전반적인 사용 환경을 개선

짧게 유지할 수 있는 경우를 제외하고 애니메이션을 자제


#### easing 키워드

linear / 선형

시간 경과에 따라 값이 균일하게 증가, 로봇처럼 부자연 스러운 느낌으로 사용자가 불편함을 느낄 수 있음
일반적으로 선형 모션을 피한다


ease-out / 빠르게 시작하며 마지막에 감속

빠른 시작으로 애니메이션에 반응 효과를 주면서 마지막에 자연스러운 감속 효과를 나타내어 일반적으로 사용자 인터페이스 작업에 가장 적합


ease-in / 느리게 시작했다가 빠르게 끝남

ex)무거운 돌이 떨어지는 것처럼 느리게 시작, 낮은 쿵 소리와 함께 빠르게 지면을 때리는 효과

상호작용 관점에서 갑작스럽게 끝나기 때문에 부자연스러운 느낌이 들수 있다

실제 움직임은 갑자기 멈추는 것이 아니라 감속하는 경향이 있기 때문

또한 시작시 굼뜨게 움직이는 듯한 효과로 반응 인지에 부정적 역향을 미칠 수 있음


ease-in-out / 느린 시작, 빠른 중간, 느린 종료

차량의 가속 및 감속과 유사

적절히 조합하여 사용하면 easing out보다 더욱 드라마틱한 효과 제공

애니메이션 대비가 증가하여 사용자에게 만족감을 줄 수 있음


#### custom easing

cubic bezier / 3차원 베지어 곡선








