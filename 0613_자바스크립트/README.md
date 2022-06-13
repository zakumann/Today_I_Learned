### 함수
함수(function)란 하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록을 의미한다.

#### 함수의 장점

- 각 명령의 시작과 끝을 명확하게 구별할 수 있다.
- 함수에 별도의 이름을 붙이면 같은 기능이 필요할 때마다 해당 함수를 실행할 수 있다.

#### 함수 선언 (함수 정의)

 - 함수가 어떤 명령을 처리해야 할지 미리 알려주는 것
 - function 예약어를 사용하고, {}안에 실행할 명령을 작성
 
 ```
 function addNumber(){
 	var sum = 10 + 20;
    console.log(sum);
 }
 ```
 
#### 함수 호출(함수 실행)

 - 함수 이름을 사용해 함수 실행
 
 ```
 addNumber()
 ```

#### 함수 선언의 위치

함수를 선언해 놓기만 하면, 선언한 위치와 상관없이 함수를 실행 할 수 있다.

```
addNumber();

function addNumber(){
	...
}
```

```
function addNumber(){
	...
}

addNumber();
```

var 변수의 스코프(scope)
- 변수 이름 앞에 var을 붙이면 지역 변수는 함수 안에서만 사용할 수 있다.
- var가 없으면 전역 변수 -> 실수로 var을 빼먹으면 프로그램 전체에서 사용할 수 있는 변수가 된다.

let과 const가 바로 프로그래밍 오류를 방지하기 위해서 ES6 버전부터 등장한 변수를 선언하는 예약어다.

#### let과 const

var 변수의 호이스팅
변수를 선언하기 전에 변수를 사용하면?
->오류가 생기지 않는다.
->변수 선언이 앞에 있는 것처럼 끌어올려(hoisting) 인식한다.

```
var x 
```

- let - 프로그램 안에서 값이 변하는 변수
- const - 프로그램 안에서 값이 변하지 않는 변수

**변수의 스코프**
let 변수와 const 변수는 블록 영역의 스코프

**호이스팅 없음**
변수를 선언하지 ㅇ낳고 사용하면 오류 발생

**변수의 재선언 불가**
같은 변수를 다시 선언하면 오류 발생

#### 변수 사용법

- 전역 변수는 최소한으로 사용한다.

- var 변수는 함수의 시작부분에서 선언한다.( 호이스팅 방지)

- for문의 카운터 변수는 블록 변수(let)을 사용한다.

- ES6를 사용한 프로그램이라면 var보다 let을 사용한다.

### 매개변수(paameter)

- 함수를 실행하기 위해 필요하다고 지정하는 값
- 함수를 선언할 때 함수 이름 옆의 괄호 안에 매개변수 이름을 넣는다.

```
function addNumber(a,b){
	var sum = a + b;
    console.log(sum);
}
```

### 인수(argument)

- 함수를 실행하기 위해 필요하다고 지정하는 값
- 함수를 실행할 때 매개변수로 넘겨주는 값
```
addNumber(2,3);

addNumber(10,20);
```

### return 문

- 함수를 실행한 결과값을 함수 밖으로 넘기는 문
- 반환된 값은 함수를 실행한 소스 위치로 넘겨짐.

```
var num1 = parseInt(prompt("첫 번째 숫자는? "));
var num2 = parseInt(prompt("두 번째 숫자는? "));
var result = addNumber (num1, num2);
alert("두 수를 더한 값은 " + result + "입니다.");

function addNumber(a,b){
	var sum = a + b;
    return sum;
}
```

### 함수 표현식

#### 익명 함수

- 이름이 없는 함수
- 함수 자체가 '식'이기 때문에 함수를 변수에 할당하거나 다른 함수의 매개변수로 사용 할 수도 있다.

```
var add = function(a, b){
	return a + b;
}
```

```
>var sum = add(10,20);
>sum
<30
```

#### 즉시 실행 함수

- 함수를 정의함과 동시에 실행하는 함수
- 즉시 실행 함수는 변수에 할당할 수 있고 ,함수에서 반환하는 값을 변수에 할당할 수도 있다.

```
(function(){
...
})();
```
or
```
(function(){
...
}());
```

**함수를 이용한 놀이**

```
    <script>
        var dan = parseInt(prompt("단을 입력해주세요."));

        function displaygugudan(todan){
            for(let i = 2; i < todan + 1; i++){
                for(let j = 1; j < 10; j++){
                document.write(i + "*" + j + "=" + i*j+"<br>");
            }
        }
    }

    displaygugudan(dan);
    </script>
```
구구단
