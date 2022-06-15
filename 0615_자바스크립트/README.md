
### Array 객체

Array 객체는 배열에 활용하는 많은 속성과 함수가 미리 정의되어 있는 객체

**둘 이상의 배열을 연결하는 concat() 함수**

- 기존의 배열에 또 다른 배열이나 값을 합쳐서 새로운 배열을 만드는 함수
- concat() 함수는 새로운 배열을 만들기 때문에 기존의 nums나 chars 배열에는 영향을 주지 않는다.

**배열 요소를 연결하는 join() 함수**

- 지정한 구분 기호를 사용해 배열 요소 연결
- 구분 기호를 지정하지 않으면 쉼표(,)로 구분

**새로운 요소를 추가하는 push()와 unshift() 함수**

- push()함수 : 배열의 맨 끝에 요소 추가
- unshift() 함수 : 배열의 만 앞에 요소 추가
- 새 요소가 추가된 후의 요소 개수가 반환됨.

**배열에서 요소를 추출하는 pop() 함수와 shift() 함수**

- pop() 함수 : 배열의 맨 뒤에 있는 요소 추출
- shift() 함수 : 배열의 맨 앞에 있는 요소 추출
- 추출한 요소가 반환됨.

**원하는 위치의 요소를 삭제/추가하는 splice()함수**

- 괄호 안에 들어 있는 인수에 따라 일정 구간의 요소를 삭제하고 새로운 요소를 추가하는 함수
- splice()함수를 실행하면 삭제한 구간의 요소들로 이루어진 새로운 배열이 결과값으로 표시됨.

1) 인수 1개 : 인수가 가리키는 인덱스의 요소부터 배열의 끝 요소까지 삭제

2) 인수 2개 : 첫 번째 인수는 인덱스이고 두번째 인수는 삭제할 개수이다.

3) 인수 3개 : 첫 번째 인수는 해당 배열에서 삭제를 시작할 위치, 두 번째 인수는 삭제할 개수, 제한 위치에 새로 추가할 요소. 기존 배열의 요소를 삭제하지 않고 새로운 요소를 추가하고 싶다면, 삭제할 개수를 지정하는 두 번째 인수에 0을 넣는다.

```
>var num = ["one","two","three","four"];
>num
<var char =['a','b','c','d']
<undefined
>num.concat(char)
<(8) ['one', 'two', 'three', 'four', 'a', 'b', 'c', 'd']

num.join()
'one,two,three,four'
num.join('-')
'one-two-three-four'

num.push('five','six')
6
num
(6) ['one', 'two', 'three', 'four', 'five', 'six']
// push는 뒤쪽에 추가를 한다.

num.unshift('zero')
7
num
(7) ['zero', 'one', 'two', 'three', 'four', 'five', 'six']
// unshift는 앞 쪽에 추가한다.
```

**원하는 위치의 요소들을 추출하는 slice() 함수**

-여러 개의 요소를 추출하는 함수

1) 시작 인덱스와 끝 인덱스를 지정하면 시작 인덱스부터 끝 인덱스 직전까지 추출
2) 시작 인덱스만 지정할 경우 시작 인덱스부터 끝까지 모두 추출

1) 배열 만들기

2) 챙길 물건 배열에 추가하기-텍스트 필드 사용

3) 추가한 내용, 목록 형태로 화면에 표시하기 - for문 사용

4) 챙겼다면 목록에서 삭제하기

#### 여행 준비물 점검 목록

```
var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList); //addBtn.onclick = addList

function addList(){
    // 텍스트 필드 내용을 가져오기 
    var item = document.querySelector("#item").value;
    if (item != null){
        itemList.push(item);  //itemList  끝에 item 내용 추가 
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
}

function showList(){
    var list = "<ul>";
    for (var i =0; i < itemList.length ; i++){
        list += "<li>"+  itemList[i]  + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>";
    document.querySelector('#itemList').innerHTML = list;  //list 내용 표시 

    // 삭제버튼을 변수로 저장 
    var remove = document.querySelectorAll(".close");

    for (var i=0; i < remove.length; i++){
        remove[i].addEventListener("click", removeList); //요소를 클릭하면 removeList()실행
    }
}

function removeList(){
    var id = this.getAttribute("id"); //클릭한 삭제 버튼의 id값을 가져온다 .
    itemList.splice(id, 1);
    showList();
}
```
'checklist.js'

### DOM(문서 객체 모델)

자바스크립트가 웹 문서를 동적으로 다룰 수 있도록 문서에 있는 각 요소를 객체 형태로 처리하는 것.

```
document.querySelector('#detail p').
```
#### DOM 트리

- DOM은 웹 문서의 요소를 부모 요소와 자식 요소로 구분
- 웹 문서 구조를 부모/자식 관계로 표시하면 나무를 거꾸로 뒤집어 놓은 모습 -> DOM 트리

```
<body>
	<h1>제목</h1>
    <p>본문</p>
</body>
```



#### DOM 트리의 노드
- 웹 문서의 태그는 요소(Element) 노드로 표현한다.
- 태그가 품고 있는 텍스트는 해당 요소 노드(태그)의 자식 노드인 텍스트(Text) 노드로 표현한다.
- 태그의 속성은 모두 해당 요소 노드(태그)의 자식 노드인 속성(Attribute) 노드로 표현한다.
- 주석은 주석 노드(Comment)로 표현한다.

DOM에 요소 추가하기

createElement() : 새 요소 노드를 만든다.
createTextNode() : 텍스트 내용이 있을 경우 텍스트 노드를 만든다.
appendChild() : 텍스트 노드를 요소 노드에 자식 노드로 추가한다.
createAttribute() : 요소에 속성이 있을 경우 속성 노드를 만든다.
setAttributeNode() : 속성 노드를 요소 노드에 연결한다.
appendChild() : 새로 만든 요소 노드를 부모 노드에 추가한다.

#### DOM 요소에 접근하는 여러 가지 방법

DOM요소를 id 선택자로 접근하는 함수 - getElementById()

DOM 요소를 class 값으로 찾아내는 함수 - getElementsByClassName()

DOM 요소를 태그 이름으로 찾아내는 함수 - getElementsByTagName()

#### 웹 요소의 태그 속성 가져와서 수정하기

HTML 태그 속성을 가져오거나 수정하는 함수 - getAttribute(), setAttribute()

#### DOM에서 이벤트 처리하기

**HTML 태그 안에서 이벤트 처리기 연결하기**

HTML 태그와 자바스크립트 소스가 섞여 있는 형태라서 중간에 이벤트를 바꾼다거나 연결 함수를 바꾸려면 HTML 소스를 수정해야 한다. HTML 소스가 길지 않아서 쉽게 확인이 가능할 때 사용할 수 있다. 이 방법은 하나의 요소에 하나의 이벤트 처리기만 사용할 수 있다.

**DOM요소에 이벤트 처리기 연결하기**

이 방법은 이벤트가 발생할 웹 요소를 가져온 후 이벤트 처리기르 연결하는 방법이다. 이벤트 처리기를 자바스크립트 소스로 실행하는 것으로 HTML 태그와 뒤섞이지 않고 자바스크립트 소스를 사용한다는 점이나 하나의 요소에 하나의 이벤트 처리기만 사용 할 수 있다.

#### 웹 요소의 스타일 가져와서 수정하기

**DOM으로 CSS 속성에 접근하고 수정하기**

- style 속성 다음에 속성 이름 작성
- 텍스트 스타일 바꾸려면 (요소).style.color

```
>document.querySelector("#heading").style.backgroundColor = 'gray'
<"gray"
```
- backgroundColor나 borderRadius처럼 두 단어를 합치고 두 번째 단어의 첫 글자를 대문자로 쓴느 낙타 표기법으로 입력한다.

웹 요소를 화면에 표시하기 /감추기

```
		var isOpen = false;
		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		var view = document.querySelector("#view");
		view.addEventListener("click", function(){
			if (isOpen == false){  //상세정보가 안 보임 -> 보이게 처리
				document.querySelector("#detail").style.display = "block";
				view.innerHTML = "상세 설명 닫기";
				isOpen = true;
			}
			else{	//상세정보가 보임 -> 안 보이게 처리 
				document.querySelector("#detail").style.display = "none";
				view.innerHTML = "상세 설명 보기";
				isOpen = false;
			}
		});
```
'./product.js'

노드 순서 바꾸기 & 삭제

hasChildNodes() 함수
특정 노드에 자식 노드가 있는지 확인하는 함수. 자식 노드가 있따면 true, 없다면 false 반환

childNodes 속성
현재 노드의 자식 노드에 접근할 수 있다. 요소 노드뿐만 아니라 태그와 태그 사이의 줄바꿈도 빈 텍스트 노드인 자식 노드로 인식.

children 속성
요소 노드뿐만 아니라 텍스트 노드나 주석 노드까지 모두 접근할 수 있다. 만약 텍스트 노드와 주석 노트는 필요하지 않고 요소 노드에만 접근한다면 children 속성을 사용하면 된다.

insertBefore() 함수
부모 노드에 자식 노드를 추가할 때 기준 노드를 지정하고 그 앞에 자식 노드 추가

removeChild() 함수와 parentNode 속성
부모 노드에서 자식 노드를 삭제하는 함수이고, 괄호 안에는 삭제하려는 자식 노드가 들어간다. 노드는 스스로 삭제할 수 없기 때문에 부모 노드에 접근할 후 부모 노드에서 삭제해야 한다. 부모 노드 정보를 가지고 있는 속성이 parentNode 속성이다.