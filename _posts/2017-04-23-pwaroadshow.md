---
layout: post
title: Progressive Web App
tags:
- pwa
- amp
published: true
---


PWA (Progressive Web App)

A new way to deliver amazing experiences on the web.

웹에서 놀라운 사용자 경험을 제공하는 새로운 방법

---

프로그레시브 웹앱은 웹을 통해 도달 할 수 있는 사용자 경험


#### Reliable 신뢰

네트워크 상태가 불확실한 경우에도 즉시로드하여 공룡을 표시하지 않음


#### Fast 빠름

매끄럽고 부드러운 애니메이션, 사용자 인터랙션에 신속하게 응답


#### 매력적인 사용자 환경

네이티브 앱처럼 동작하는 몰입 형 사용자 환경


---

### Reliable

사용자의 홈 화면에서 시작할 때 서비스워커는 네트워크 상태에 관계없이 즉시로드

Javascript로 작성된 서비스워커는 캐시를 제어하고 리소스 요청에 응답하는 방법을 제공한다.

주요 리소스를 사전 캐싱하면 네트워크에 대한 의존도를 없애고 사용자에게 즉각적이고 안정적인 환경을 보장 할 수 있다.



#### Service Worker 서비스워커

브라우저가 백그라운드에서 실행하는 스크립트로, 웹페이지와 별개로 작동

오프라인 경험 / 주기적 백그라운드 동기화 / 푸시알림



[Service Workers 서비스워커](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers){:target="_blank"}

---

### Fast

로드하는 데 3초 이상이 소요되는 경우 사용자의 53%가 사이트를 나가버린다.


#### 콘텐츠 효율성 최적화

최적의 성능을 제공하기 위해 모든 바이트 하나하나를 최적으로 전달해야 한다.

불필요한 다운로드 제거, 압축기술을 통해 각 리소스의 전송 최적화

캐싱을 활용해 콘텐츠 효율성을 최적화해서 즉각적인 웹 환경을 구현


#### 주요 렌더링 경로

HTML, CSS 및 자바스크립트를 수신하고 처리하여 렌더링된 픽셀로 변환하는 과정을 파악해야 한다.

현재 사용자 작업과 관련된 콘텐츠 표시의 우선순위 지정



#### 렌더링 성능

브라우저가 HTML, CSS, 자바스크립트를 처리하는 방법을 이해, 작성하는 코드가 최대한 효율적응로 실행되도록 보장해야 한다.

javascript, style, layout, paint, composite

layout과 paint 가 필요 없는 속성을 변경 하면 브라우저가 합성 단계로 건너 뛴다.

가장 이상적이고 비용이 적게 드는 버전

컴포지터가 단독으로 처리할 수 있는 변경 속성을 고수

**transform, opacity**


[페이지 성능 컴포지터 전용 속성](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count){:target="_blank"}



#### 낮은 대역폭 및 높은 지연시간으로 테스트

네트워크 연결 상태가 나쁘거나 불안정한 경우 사용성 파악해 이에 따라 빌드하는 것이 중요하다.

chrome DevTools / Network pannel test


---

### Engaging

프로그레시브 웹 앱은 설치가 가능하며 앱스토어가 없이도 사용자 홈 화면에 추가할 수 있다.

웹 앱 매니페스트 파일을 통해 몰입형 경험을 제공하고 푸시알림으로 사용자를 다시 참여 시킨다.


#### 웹 앱 매니페스트 / manifest.json

홈 화면에서 실행할때 나타내는 고유한 아이콘과 이름 설정

스플래시 화면, 테마 색상, URL 처리 등


```javascript
{
  "short_name": "AirHorner",
  "name": "Kinlan's AirHorner of Infamy",
  "icons": [
    {
      "src": "launcher-icon-1x.png",
      "type": "image/png",
      "sizes": "48x48"
    },
    {
      "src": "launcher-icon-2x.png",
      "type": "image/png",
      "sizes": "96x96"
    },
    {
      "src": "launcher-icon-4x.png",
      "type": "image/png",
      "sizes": "192x192"
    }
  ],
  "start_url": "index.html?launcher=true"
}
```

반드시 포함 되어야 하는 항목

short_name : 사용자 홈 화면의 텍스트 

name : 웹 앱 설치 배너에 사용


[웹앱 매니페스트 menifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/){:target="_blank"}


---


### Why build a Progressive Web App?

프로그레시브 웹 앱을 만드는 이유

Building a high-quality Progressive Web App has incredible benefits, making it easy to delight your users, grow engagement and increase conversions.

고품질의 프로그레시브 웹 앱을 구축하면 사용자를 기쁘게 하고 참여도와 전환율을 높일 수 있는 놀라눈 이점이 있다.


#### Worthy of being on the home screen

프로그레시브 웹 앱 기준이 충족되면 chrome은 사용자에게 홈 화면에 추가하라는 메시지 표시



#### Increased engagement

참여도 증가

웹 푸시 알림은 참여도를 증가시키고 사용자가 많은 시간을 보내게 한다.



#### Work reliably, no matter the network conditions

네트워크 조건에 관계없이 안정적인 작업


#### Improved conversions

신규 사용자의 전환율을 향상 시킬 수 있다.


---


### Lighthouse

웹 앱의 품질을 개선하는 오픈 소스 자동화 도구

chrome 확장프로그램, 커맨드 라인에서, 노드 모듈에서 사용 가능

테스트 실행 후 보고서 생성, 개선하기 위해 할 수 있는 것에 대한 지표로 사용


[Lighthouse 라이트하우스](https://developers.google.com/web/tools/lighthouse/){:target="_blank"}



---



### PWA Road show 주요 내용들


#### 웹 성능 개선의 중요성 


53%의 사용자는 3초 이상 페이지가 안뜨면 나가버린다.

More Fast! - 고성능

---

#### Reliable, Fast, Engaging

PWA의 핵심 : 신뢰성,고성능,사람들을 끌어오게 하는 것

UX 올바른 사용자 경험 제공

웹사용자 경험을 근본적인 관점에서 향상시키는 것

---

#### Reliable

사용자에게 공룡을 보여주지 말자

---

#### Fast

53%의 사용자는 3초 이상 페이지가 안뜨면 나가버린다.

---

#### Engaging

홈스크린,몰입,알림


---

#### Manifest & Service Worker

PWA를 구성하는 표준기술

---

#### Service Worker

캐시를 저장, 오프라인 상태에서 최소한의 서비스를 제공

백그라운드 실행 컨텍스트 제공

Lie-fi 상황, 컨텐츠 캐싱, 안정성


ex)alibaba, konga.com, IBM the weather Company, Flipcart, selio, wego.com, podle audio

데이터 낭비 감소, 트랜잭션 개선, 실구매자 증가, Engaging

---

#### How?

case1.바닥부터 시작

case2.가벼운 버전으로 시작 ex)Twitter Lite

case3.하나의 기능부터 시작, 일부 개선


---


#### Reference

Udacity, PWA.rocks, google code laps


#### Manifest

shotname, icons, display, themecolor, orientation, start URL, splash screen etc...


---

#### LightHouse

웹페이지 성능 진단 도구

---

#### AMP

AMP (Accelerated Mobile Pages)

모바일 페이지속도개선

Start Fast, Stay Fast

빠르게 시작하되 그것을 유지하라

HTML, JS, Cache

---

#### Reference

ampproject.org

amb by example.com / DOCS

goo.gl/zS42rs

---

#### Shadow Dom

1 amp / many doc



