## 미디어 쿼리

미디어 쿼리는 반응형 웹 디자인의 핵심 부분이다. 뷰포트의 크기에 따라 서로 다른 조판을 생성할 수 있기 때문이다. 그러나 예를들면 사용자는 마우스가 아닌 터치스크린을 사용하는지와 같이 실행 중인 사이트 환경에 대한 여러 내용들을 탐지하는 데도 사용할 수 있다. 

미디어 쿼리 기본
가장 간단한 미디어 쿼리 구문은 다음과 같습니다:

@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}

### 미디어 쿼리 구문의 구성 요소:

여기 코드가 어떤 미디어를 위한 것인지 브라우저에 알려주는 미디어 유형(예를 들어, 인쇄 또는 화면).
괄호로 묶은 CSS 규칙이 적용되기 위해 전달되어야 하는 규칙 또는 조건문 격인 미디어 표현식.
조건문을 통과하고 미디어 유형이 올바른 경우 적용되는 CSS 규칙 집합.

미디어 쿼리에 대한 설명
### [media-query](https://github.com/zakumann/Today_I_Learned/tree/master/0523_%EB%B0%98%EC%9D%91%ED%98%95%20%EC%9B%B9/media-query%EC%84%A4%EB%AA%85)

### 미디어 기능 규칙

너비와 높이
-------
반응형 디자인을(그리고 광범위한 브라우저 지원이 되도록) 만들기 위해 가장 자주 탐문하는 기능은 뷰포트 너비이며, min-width와 max-width, width 등의 미디어 기능을 활용하여 뷰포트가 특정 너비 이상 또는 이하인 경우 CSS를 적용할 수 있다.

### [미디어 쿼리의 예시](https://github.com/zakumann/Today_I_Learned/tree/master/0523_%EB%B0%98%EC%9D%91%ED%98%95%20%EC%9B%B9/menu_exam)

미디어 쿼리는 모바일의 등장 이후, 4개의 반응형 분기점을 가지고 있다.

4개의 반응형 분기점
-------

- 낮은 해상도의 PC, 태블릿 가로 : ~1024px
- 테블릿 가로 : 768px ~ 1023px
- 모바일 가로, 태블릿 : 480px ~ 767px
- 모바일 : ~ 480px


[개발 메모장](https://hohoya33.tistory.com/127)

### [Mobile_first](https://github.com/zakumann/Today_I_Learned/tree/master/0523_%EB%B0%98%EC%9D%91%ED%98%95%20%EC%9B%B9/mobile_first)

### [card](https://github.com/zakumann/Today_I_Learned/tree/master/0523_%EB%B0%98%EC%9D%91%ED%98%95%20%EC%9B%B9/card)

ps.
menu-exam2에 있는 css에 있는 @media를 통해서 width의 크기에 따라서 글자 크기를 변경시킬 수가 있다.