### array

배열은 리스트와 비슷한 객체로서 순회와 변형 작업을 수행하는 메서드를 갖는다. JavaScript 배열은 길이도, 각 요소의 자료형도 고정되어 있지 않는다. 배열의 길이가 언제든지 늘어나거나 줄어들 수 있고 데이터를 연속적이지 않은 곳에 저장할 수 있으므로, JavaScript 배열은 밀집성을 보장하지 않는다. 보통 이런 성질들은 편리하지만, 사용하려는 목적에 맞지 않으면 형식화 배열(typed array)을 사용하는 것을 고려보는 것이 좋다.

배열은 (연관 배열과 달리) 요소 인덱스로 문자열을 사용할 수 없으며 무조건 정수만 허용한다. 대괄호 구문 또는 속성 접근자를 사용해 정수가 아닌 키에 접근할 경우 배열의 요소가 아니라 배열의 객체 속성 컬렉션에 연결된 변수를 바라보게 된다. 순회 및 변형 작업 또한 이런 속성에 적용할 수 없다.

#### 배열이란
1. 배열. 여러 자료들 묶어서 활용 할 수 있는 자료들
2. 배열은 요소로 구성되어 있다. 요소= element(엘리먼트)
3. 배열은 0부터 시작
4. index안에 연산도 가능하다.

배열기본구조
```
const array1 = [273, "문자열", true, [27,35],{}, "fun"]  
배열안에 배열이 들어올 수도 있다.
요소를 구분할때는 쉼표를 이용한다<div class=""></div>


const str ="안녕하세요"
str.length  글자 전체 길이가 5라고 함. length는 1부터 시작함
str[3]  index는 처음부터 0,1,2,3 인 0부터 시작함 
```
[Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### array의 예시-1
```
const numbers = [266,665,325,324]
undefined
numbers[0]
266
numbers[1+1]
325
numbers[1+2]
324
numbers[2+2]
undefined
```


```
fs
(5) ['배', '사과', '키위', '바나나', '딸기']
fs.splice(1,1)
['사과']
fs
(4) ['배', '키위', '바나나', '딸기']
fs.spolice(2,1)
(3) ['배', '키위', '딸기']
fs.splice(1.2)
(2) ['키위', '딸기']0: "키위"1: "딸기"length: 2[[Prototype]]: Array(0)
fs.push('키위')
2
fs.push('딸기','수박')
4
fs.splice(0,1)
['배']
fs
(3) ['키위', '딸기', '수박']
```

#### array의 예시-2

```
const fsk = ['배','사과','키위', '바나나', '딸기']
undefined
fsk.splice(2)
(3) ['키위', '바나나', '딸기']
fsk
(2) ['배', '사과']
fsk.indexOf('사과')
1
fsk.indexOf('수박')
-1
fsk.push('사과')
3
fsk
(3) ['배', '사과', '사과']
fsk.indexOf('사과')
1
```
#### splice

fsk 배열을 구글 툴을 통해 콘솔로 실행한 결과로, splice()함수에 2를 쓰면, 배열 2부터 요소를 삭제함으로써 결과값은 '배', '사과'가 남는다.

여기에 만약 fsk.splice(2,0,'딸기')처럼 시작하는 위치 뒤에 삭제할 개수를 0으로 표기 한 다음에 '딸기'를 작성하면 결과적으로 추가가 된다.

```
fsk
['배']
fsk.splice(2,0,'딸기')
[]
fsk.splice(2,0,'딸기')
[]
fsk
(3) ['배', '딸기', '딸기']
```

#### indexOf

indexOf는 배열의 위치로 시작점은 0에서 잡는다. 이 때, 배열에 요소가 없다면 -1로 출력된다.

#### push
배열 뒤쪽에 추가할 요소를 넣는다.


tip. splice 함수 안에다 indexOf를 입력하고 거기에 요소를 작성하면 그 요소가 삭제된다.

```
fsk.splice(fsk.indexOf('사과'))
(2) ['사과', '사과']
fsk
['배']
```
### for문


```
for(const i in fsk){
    실행문장
}
```
예시
```
    <script>
        const fruits = ['사과','딸기','수박','참외']
        for (const i in fruits){
            console.log(fruits[i])
        }
    </script>
```

#### for in

for문
1) for문에는 총 3가지가 있다.
2) for in / for of 는 배열에서 사용. 
for

for문 기본구조
for(const i in fask(배열객체) ){
    실행문장
}

for (let i=0; i < 100; i++){

       console.log(i);) 

→ 인덱스(i) = 0부터 시작해서 100 이전의 수까지 반복할 거고,
i는 1씩 커지며 증가할거다 (i++) 이때 i를 출력해라
→ 결과값 : 0, 1, 2, 3, 4, 5 ... 99

배열을 쓸 경우에만 let 말고 const도 사용가능하다. (예외)

```
    <script>
        const fruits =["사과","딸기","수박","참외"]
        for(const i in fruits){
            // console.log(fruits[i])
            // console.log(i)
            console.log(`${i}번째 인덱스의 과일은 ${fruits[i]}`)
        }
        // 마지막에 배열로 작성하였다.
        // 배열 = [요소, 요소, 요소]
        // for_in은 index(0,1,2)를 가져온다.
    </script>
```

#### for of

for in(식별자 in 배열)

```
<Script>
        //  const fruits =["사과","딸기","수박","참외"]
        // for(const frk of fruits){
        //     console.log(`${frk}번째 인덱스의 과일은 ${frk}`)
        // }
        const fruits =["사과","딸기","수박","참외"]
        let a = 0
        for(const frk of fruits){
            console.log(`${a}번째 인덱스의 과일은 ${frk}`)
            a = a+ 1
        }
        // 마지막 변수로 작성
        // 배열 = [요소, 요소, 요소]
        // for_of는 요소를 가져온다.
    </Script>
```

#### for 

```
for(초기값; 조건식; 증감식){
    실행문
}
```
아래는 백인홍이라는 사람이 쓴 코드를 여기에 적어보기로 했다.

```
<body>

  <script>

    let result=0

    for(let i=0; i<10; i++){

        result=i

    }

    console.log(`${result}번째 반복입니다`)

 

  </script>
```

thank you
**문순정**

**조서진**

**백인홍**