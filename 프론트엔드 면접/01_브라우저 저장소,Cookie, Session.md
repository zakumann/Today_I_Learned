# 브라우저 저장소에 대해서 설명하기

## 로컬 스토리지, 세션 스토리지, 쿠키

로컬 스토리지와 세션 스토리지는 HTML5에 추가된 저장소로 간단한 key와 value를 저장할 수 있고, 두개의 차이로는 영구성에 있다.

로컬 스토리지는 사용자가 지우지 않는 한 브라우저에 계속 남지만,
세션 스토리지는 윈도우나 창을 닫으면 없어진다.

이런 로컬스토리지와 세션 스토리지 이전에 브라우저에 저장소 역할을 한 것이 쿠키이다.
쿠키란 만료기한이 있는 key-value 저장소 이다.

## 로컬 스토리지(Local Storage) & 세션 스토리지(Session Storage)

key와 value를 순서대로 저장하면 된다.
값으로는 문자열, 불린, 숫자, null, undefined등을 저장할 수 잇지만 모두 문자열로 변환됨.
키도 문자열로 변환.

JSON.stringify를 이용해 한번에 객체를 통째로 저장 가능.
JSON.parse를 이용하여 받음.

세션 스토리지의 경우도 로컬 스토리지와 사용방법이 동일.
차이점은 윈도우나 창이 닫히면 없어진다는 점.

장점 :
- 서버에 불필요한 데이터를 저장하지 않는다.
- 용량이 크다 (5mb, 브라우저마다 차이있음)

단점 :
- HTML5를 지원하지 않는 브라우저의 경우 사용 불가

## 쿠키 (Cookie)

장점 :
- 대부분의 브라우저가 지원

단점 :
- 매HTTP요청마다 포함되어 api호출로 서버에 부담이된다.
- 용량이 작음.(약 4kb)

## 사용 예

자동 로그인 -> 로컬스토리지

입력 폼 정보 -> 세션스토리지

비로그인 장바구니 -> 세션스토리지

다시 보지 않음 팝업 창 -> 쿠키