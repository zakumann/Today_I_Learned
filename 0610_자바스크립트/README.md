## while

while문은 조건문이 참일 때 실행되는 반복문이다. 조건은 문장안이 실행되기 전에 참, 거짓을 판단한다.

### 문법

```
while (condition)
  statement
```

**조건**

반복이 시작되기 전에 조건문은 참,거짓을 판단받게 된다. 만약 조건문이 참이라면, while문 안의 문장들이 실행된다. 거짓이라면, 문장은 그냥 while 반복문 후로 넘어간다.

**문장**
조건문이 참일 때만 while문 속의 문장들이 실행된다. 반복문 속에 여러개의 문장을 사용하고 싶다면 중괄호 { } 를 통해 문장들을 하나로 묶어야 한다.

**예제**
다음의 while문은 n이 3보다 작을 때까지 반복한다.

```
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

## 함수

함수는 JavaScript에서 기본적인 구성 블록 중의 하나다. 함수는 작업을 수행하거나 값을 계산하는 문장 집합 같은 자바스크립트 절차다. 함수를 사용하려면 함수를 호출하고자 하는 범위 내에서 함수를 정의해야만 한다.

### 함수 선언

함수 정의(또는 함수 선언)는 다음과 같은 함수 키워드로 구성되어 있다.

- 함수의 이름
- 괄호 안에서 쉼표로 분리된 함수의 매개변수 목록 
- 중괄호 { } 안에서 함수를 정의하는 자바스크립트 표현

```
function square(number) {
  return number * number;
}
```

함수 **square**은 **number**라는 하나의 매개변수를 가진다. 이 함수는 인수 (즉, **number**) 자체를 곱하여 반환하는 하나의 문장으로 구성되어 있다. **return** 문은 함수에 의해 반환된 값을 지정한다.

```
return number * number;
```

기본 자료형인 매개변수(number와 같은)는 값으로 함수에 전달된다. 즉, 값이 함수로 전달된다. 그러나 함수가 매개변수의 값을 바꾸더라도 이는 전역적으로 또는 함수를 호출하는 곳에는 반영되지 않는다.

### 함수 표현식

위에서 함수 선언은 구문적인 문이지만, **함수 표현식**에 의해서 함수가 만들어 질 수도 있습니다. 이 같은 함수를 익명이라고 합니다. 이 말은 모든 함수가 이름을 가질 필요는 없다는 것을 뜻합니다. 예를 들어, 함수 square은 다음과 같이 정의 될 수도 있습니다:

```
var square = function(number) { return number * number };
var x = square(4) // x 의 값은 16 입니다.
```

하지만, 함수 표현식에서 함수의 이름을 지정 할 수 있으며, 함수내에서 자신을 참조하는데 사용되거나, 디버거 내 스택 추적에서 함수를 식별하는 데 사용될 수 있습니다.

```
var factorial = function fac(n) { return n<2 ? 1 : n*fac(n-1) };

console.log(factorial(3));
```

다음 코드에서, 함수 표현식으로 정의된 함수를 인자로 받아, 2번 째 인자인 배열의 모든 요소에 대해 그 함수를 실행한다.

```
function map(f, a) {
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
      return result;
}
var f = function(x) {
   return x * x * x;
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);
```

함수는 [0, 1, 8, 125, 1000] 을 반환한다.

[함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions#%ED%95%A8%EC%88%98_%EC%A0%95%EC%9D%98)

# 자바스크립트 반복문 총정리

1. for 문: 고전적인 for문
```
=> for(let i = 0; i < 10; i++){...반복 수행 코드...}
for (let i = 0; i < 10; i++){
    console.log(i); // 0~9까지 출력
}
```
* (주의) 변수 선언 시, const를 쓰면 값 변경이 불가하여 에러가 발생하니 주의
 
 
2. for in 문: 객체의 프로퍼티 키 열거 전용

=> for(const key in 객체){...반복 수행 코드...}
* (주의)해당 객체가 상속받는 프로토타입 체인상의 모든 프로퍼티 키를 열거한다.(단, [[Enumerable]] 값이 false인 프로퍼티는 제외)

```
const obj = {
    name: 'curryyou',
    job: 'engineer'
}

for (const key in obj){
    console.log(`${key} : ${obj[key]}`);
}
// name : curryyou
// job : engineer
```
 
3. for of 문: 이터러블 순회 전용

=> for(const item of 이터러블){...반복 수행 코드...}

```
const arr = [10, 20, 30];
for (const item of arr){
    console.log(item); // 10, 20, 30 출력
}
```

* (참고) 이터러블에는 String, Array, Map, Set, DOM컬렉션(HTMLColletion, NodeList) 등이 있다.
 
 
4. forEach(): 배열 순회 전용 메서드

=> 배열.forEach( function(value, index, array){...반복 수행 코드...} )
* 콜백함수의 매개변수로 value에 요소값, index에 인덱스, array에 원본 배열이 들어온다.

```
[10, 20, 30].forEach((value, index, array)=>{
    console.log(`${index} : ${value}`); // 0 : 10, 1 : 20, 2: 30 출력
})
```
 
 
5. while 문: 고전적인 while문

=> while(조건식){...반복 수행 코드...}
```
let num = 0;
while(num <3){ 
    console.log(num);  // 0~2 까지 출력
    num++;
}
```
 
6. do while 문: 고전적인 do...while문

=> do{...반복 수행 코드...} while(조건식);
```
do{
    console.log('일단 한번은 실행된다.'); // 이 코드만 한번 실행되고 반복 종료.
}while(false);
```
 
7. Object 객체 메서드: 객체 순회 전용

1) Object.keys(객체) 
: 객체의 프로퍼티 '키'를 배열로 반환
```
Object.keys({name:'curryyou', job:'engineer'}); 
// [ 'name', 'job' ]
``` 

2) Object.values(객체) 
: 객체의 프로퍼티 '값'을 배열로 반환

```
Object.values({name:'curryyou', job:'engineer'}); 
// [ 'curryyou', 'engineer' ]
``` 

3) Object.entries(객체) 
: 객체의 프로퍼티 [키, 값]을 배열로 반환

```
Object.entries({name:'curryyou', job:'engineer'}); 
// [ [ 'name', 'curryyou' ], [ 'job', 'engineer' ] ]
``` 
 
8. Array.prototye 메서드 : 배열 전용

1) 배열.forEach( (value, index, array)=>{...반복 수행 코드...} ) 

: 배열의 length만큼 반복하여 콜백함수를 호출한다.
: 콜백함수의 매개변수로 value에 요소값, index에 인덱스, array에 원본배열이 들어온다.
```
[1, 2, 3, 4].forEach((value, index, array)=>{
    console.log(value);  // 1, 2, 3, 4 출력
})
```

2) 배열.map( (value, index, array)=>{...반복 수행 코드...} )

: forEach와 동일(순회 방식, 콜백함수 매개변수 등)
: 다른점 => 각 콜백함수에서 return 하는 값들으로 새로운 배열을 만들어 반환한다.
```
const map_reuslt = [1, 2, 3, 4].map((value, index, array)=>{
    console.log(value); // 1, 2, 3, 4 출력
    return value*10; // 각 요소에 10을 곱한 값을 배열로 반환
})

console.log(map_reuslt);  
// [ 10, 20, 30, 40 ]
``` 

3) 배열.filter( (value, index, array)=>{...반복 수행 코드...} )

: forEach와 동일(순회 방식, 콜백함수 매개변수 등)
: 다른점 => 각 콜백함수에서 return하는 값이 true일 때만, 그때의 value 값들로 새로운 배열을 만들어 반환한다.
```
const filter_result = [1, 2, 3, 4].filter((value, index, array)=>{
    console.log(value); // 1, 2, 3, 4 출력
    return value%2 == 0; // value가 짝수인 값들을 배열로 반환
})

console.log(filter_result); 
// [ 2, 4 ]
``` 

4) 배열.reduce( (previousValue, currentValue, currendIndex, array)=>{...반복 수행 코드...}, initialValue )

: 두번째 매개변수인 initialValue값을 시작으로, 
: 각 콜백함수가 return하는 값이 다음에 실행되는 콜백함수의 previousValue로 들어간다.
: 최종적으로 마지막 콜백함수가 return하는 값을 반환한다.(아래의 코드를 보면 이해가 잘 됨.)

```
const reduce_result = [1, 2, 3, 4].reduce((pv, cv, idx, arr)=>{
    return pv + cv; // 이전 콜백함수가 리턴한 값에 현재의 요소 값을 더함(누적 개념)
}, 100); // 100을 초기값으로 줌

console.log(reduce_result); 
// 110 (100 + 1 + 2 + 3 + 4 결과)
```

* 배열에는 이 외에도 every(), some(), find(), findIndex() 등의 메서드가 존재한다.
 
 
* (참고) break문
: 반복문과 switch문에서 사용되어 해당 코드 블럭에서 탈출시킨다.
: for문 순회 중에 break; 을 만나면 for 자체를 나가버린다(반복 종료!)
```
for (let i = 0; i < 10; i++){
    if(i == 5){break;} // i값이 5가 되는 순간 for문 종료 => 0~4 까지만 출력
    console.log(i);
}
```
 
* (참고) continue문
: 해당 차수(?)의 반복을 중단하고, 다음 반복으로 넘어간다.
: for문 순회 중에 continue;를 만나면 for문 처음의 증감식/조건식 부분으로 넘어간다.
```
for (let i = 0; i < 10; i++){
    if(i%2 === 0){continue;} // i가 짝수라면, 다음 반복으로 넘어감 => 홀수만 출력됨
    console.log(i);
}
```

[카레유:티스토리](https://curryyou.tistory.com/202)