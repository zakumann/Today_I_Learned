// 첫 번째는 메인 영역의 텍스트 타이핑 효과입니다. 화면에 보여 줄 텍스트 데이터를 배열로 저장하고 일정 시간마다 반복하면 타이핑하듯이 화면에 출력합니다.

// 두 번째는 헤더 영역의 디자인 변경 효과입니다. 웹 브라우저를 스크롤하면 헤더 영역에 새로운 클래스를 추가해 디자인을 변경합니다.

// 세 번째는 스크롤 이동 효과입니다. 헤더 메뉴를 클릭하면 페이지 내부의 다른 영역으로 부드럽게 스크롤이 이동합니다.

// 텍스트 타이핑 효과
// 먼저 메인 영역의 h2 태그 안에 있는 span 태그의 텍스트를 지웁니다.
// span 요소 노드 가져오기
const spanEl = document.querySelector("main h2 span");
// 화면에 표시할 문장 배열
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
// 배열의 인덱스 초깃값
let index = 0;
// 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
let currentTxt = txtArr[index].split("");
// 실행결과  ['W', 'e', 'b', ' ', 'P', 'u', 'b', 'l', 'i', 's', 'h', 'e', 'r']
// 텍스트가 입력되는 효과의 핵심은 currentTxt 변수에 할당된 배열 요소를 앞에서부터 한 개씩 출력하는 것입니다. 그러면 마치 텍스트가 한 글자씩 작성되는 것처럼 보이게 됩니다. 이를 위해 다음처럼 writeTxt() 함수를 만들어 배열 요소를 한 개씩 출력하게 합니다.

function writeTxt(){
    spanEl.textContent += currentTxt.shift(); // ①
    if(currentTxt.length !== 0){ // ②
       setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{ // ③
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }
  writeTxt();
// ① 배열의 요소를 앞에서부터 한 개씩 출력해야 합니다. 이럴 때 사용하는 메서드가 Array 객체의 shift()입니다. shift() 메서드는 파괴적 메서드로, 배열에서 맨 앞의 요소를 추출하고 추출한 요소를 원본 배열에서 삭제합니다. 만약 currentTxt 변수에 ['W', 'e', 'b', ' ', 'P', 'u', 'b', 'l', 'i', 's', 'h', 'e', 'r'] 배열이 할당된 상태라면 배열의 첫 번째 요소인 W를 배열에서 추출하고, 배열에서 W를 삭제합니다.
// ② if 문으로 currentTxt 변수에 할당된 배열의 길이가 0인지 확인합니다. 확인하는 이유는 배열의 길이가 0이 아니라면 아직 출력해야 하는 단어가 남아 있다는 뜻이어서 배열 요소를 모두 출력할 때까지 writeTxt() 함수를 반복 호출하기 위해서입니다. 그래서 if 문의 코드를 보면 setTimeout() 메서드로 일정 시간이 흐른 뒤에 writeTxt() 함수를 다시 호출합니다. 여기서 setTimeout() 메서드의 두 번째 인자는 시간(밀리초)을 의미합니다. 이 값은 호출할 때마다 Math 객체의 random() 메서드로 0부터 100 사이의 숫자가 무작위로 구해져, 작성되는 글자 속도를 매번 달라지게 합니다.
// ③ else 문이 실행된다는 건 결국 currentTxt 배열이 비었다는 뜻입니다. 다르게 말하면 배열 안의 모든 텍스트가 전부 화면에 출력됐다는 의미죠. 그러면 텍스트 작성 함수를 끝내기 전에 텍스트를 지우기 위해 화면에 표시된 텍스트를 가져와서 split() 메서드로 다시 단어 단위로 분리해 배열에 할당합니다. 그리고 3초 뒤에 텍스트를 지우는 함수인 deleteTxt() 함수를 호출하는 것까지가 텍스트를 입력하는 writeTxt() 함수의 역할입니다.


// 텍스트 삭제는 입력 과정과 비슷합니다. 텍스트를 입력할 때는 배열의 앞에서부터 요소를 추출해 한 글자씩 출력했는데, 텍스트를 삭제할 때는 뒤에서부터 요소를 추출해 한 글자씩 줄어드는 것처럼 표현
function deleteTxt(){
    currentTxt.pop(); // ①
    spanEl.textContent = currentTxt.join("");// ②
    if(currentTxt.length !== 0){ // ③
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{ // ④
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }
//   ① 가장 먼저 currentTxt 변수에서 pop() 메서드를 실행합니다. 현재 currentTxt 변수에는 deleteTxt() 함수를 실행하기 전에 화면에 표시된 텍스트를 가져와서 split() 메서드로 분리한 배열이 할당되어 있습니다. 지금 작성하는 코드를 기준으로 첫 번째 문장인 ‘Web Publisher’를 출력했으니 현재 currentTxt 변수에는 ['W', 'e', 'b', ' ', 'P', 'u', 'b', 'l', 'i', 's', 'h', 'e', 'r']이 할당되어 있습니다.

// 이 상태에서 Array 객체의 pop() 메서드로 배열 요소를 끝에서부터 한 개씩 삭제합니다. pop() 메서드는 파괴적 메서드라서 원본 배열에서 요소가 삭제됩니다. 그래서 변수에 할당된 배열은 끝에서 요소가 하나 삭제되고 변수에는 ['W', 'e', 'b', ' ', 'P', 'u', 'b', 'l', 'i', 's', 'h', 'e']가 할당된 상태가 됩니다.

// ② 다음으로 Array 객체의 join() 메서드로 현재 배열에 있는 요소를 하나의 문자열로 합칩니다. 그러면 ‘Web Publishe’라는 문자열이 span 요소의 텍스트로 할당됩니다. 따라서 사용자 눈에는 한 글자가 삭제된 것처럼 보입니다.

// ③ 그러고 나서 writeTxt() 함수처럼 if 문으로 currentTxt 변수에 할당된 배열이 비었는지 확인합니다. 만약 값이 남아 있으면 다시 deleteTxt() 함수를 호출합니다. 이때 호출되는 시간은 0에서 0.1초(0~100) 사이에서 무작위로 설정합니다.

// ④ 모든 배열이 pop() 메서드에 의해 삭제되면 else 문이 실행됩니다. else 문에서는 다음 문장을 출력하기 위해 배열에 다시 접근합니다. 이때 index 숫자를 1 증가시키는데, 그 이유는 index 숫자가 문장이 담긴 배열(txtArr)의 길이를 넘지 않게 하기 위해서입니다. index 숫자를 1 증가시키고 나면 문장 배열에 접근해 새로운 문장을 가져옵니다. 작성된 순서대로라면 ‘Front-End Developer’에 접근합니다. 이를 split() 메서드를 사용해 배열로 만드므로 currentTxt 변수에는 ['F', 'r', 'o', 'n', 't', '-', 'E', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'] 배열이 할당됩니다. 그러면 다시 할당된 currentTxt 변수의 배열로 writeTxt() 메서드를 호출해 지금까지 한 과정을 무한히 반복합니다.

// ********************************************************
// 웹 브라우저의 수직 스크롤 위치는 window 객체의 pageYOffset 속성으로 참조할 수 있습니다. 
// 속성값이 0보다 크면 스크롤됐다고 볼 수 있으므로 이를 조건으로 처리해서 if 문으로 active 클래스를 추가하거나 삭제하면 됩니다.
// pageYOffset : 스크롤했을 때 화면이 수직으로 이동하는 픽셀 수

const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
 const browerScrollY = window.pageYOffset;
  if(browerScrollY > 0){
    headerEl.classList.add("active");   //명시된 클래스를 추가하는 메서드
  }else{
    headerEl.classList.remove("active");  //명시된 클래스를 제거하는 메서드
  }
});


// ********************************************************
// 이번에는 헤더 영역의 메뉴를 클릭하면 메뉴 영역으로 스크롤이 부드럽게 이동하는 효과를 자바스크립트로 작성해 보겠습니다.

// Window 객체의 scrollTo() 메서드에서 behavior 속성을 사용하면 애니메이션 효과를 적용해 스크롤을 부드럽게 이동할 수 있습니다. 단, IE나 iOS 모바일에서는 제대로 동작하지 않습니다. 이 외의 웹 브라우저에서는 정상적으로 작동합니다.

// 일단 이동할 대상 요소를 가리키는 선택자(selector)를 매개변수에 전달받아 이동하려는 대상의 현재 위칫값을 구하는 코드를 작성합니다.
/* 애니메이션 스크롤 이동 */
const animationMove = function(selector){
    // ① selector 매개변수로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 웹 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값) https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect
    //getBoundingClientRect(): 윈도우(window)룰 기준으로 특정 엘리먼트의 위치 값을 구하는 방법
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
    // ④ 스크롤 이동 https://salgum1114.github.io/css/2019-04-28-scroll-behavior-smooth/
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
  };

//   코드가 조금 복잡해 보일 수 있지만, 부드러운 스크롤 이동 효과를 구현하는 데 꼭 필요한 값들입니다. 웹 브라우저의 스크롤 이동을 처리하려면 이동할 대상의 스크롤 위치(y 값)를 당연히 알아야 합니다. 그러려면 이동할 대상의 노드를 가져올 수 있어야 하고(①), 현재 웹 브라우저의 스크롤 위치를 구해야 합니다(②). 그래야 가져온 요소 노드로 구하는 위치의 정확한 y 값을 구할 수 있습니다(③). 그리고 window 객체의 scrollTo() 메서드를 사용해 해당 위치로 이동합니다(④).

// 이제 기존 헤더 영역에서 메뉴에 해당하는 button 태그에 클릭 이벤트를 연결해 앞에서 만든 animationMove() 함수를 실행하겠습니다. 헤더 영역의 메뉴에 사용된 button 태그에 click 이벤트를 연결하기 위해 다음처럼 코드를 수정합니다.
// https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

// 스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
for(let i = 0; i < scollMoveEl.length; i++){
  scollMoveEl[i].addEventListener('click', function(e){
    const target = this.dataset.target;
    animationMove(target);
  });
}