### 조건문과 반복문

```
'>this is \'string\''	// < "this is 'string'"
```

```
>'this is \t string'	//<'this is \t string'
```

```
>"안녕" + " 하세요"		//<'안녕 하세요'
```

```
>"안녕하세요".length		//<5
```

boolean(불리언)
참과 거짓(true/false)을 

```
1==1	//true
1=="1"	//true
1==="1"	//false
"kk".length >= 5	//kk의 글자수는 2로 2는 5보다 크거나 작은 것은 거짓이다. 따라서, 결과는 false이다.

!("kk".length >= 5)	//kk의 글자수는 2로 2는 5보다 크거나 작은 것은 틀렸다. 따라서, 결과는 true이다.	!는 결과 값이 일치하지 않음을 표현할 때 쓰인다.
```
&&(AND)
값이 둘 다 일치해야 true가 나온다.

true&&true 일시에만 true가 출력되며, 그 이외에는 false가 출력된다.

||(OR)
값이 둘 중 하나라도 일치하면 true가 나온다.

단, false || false 일 경우에만 유일하게 false가 출력된다.


++1과 1++의 차이

앞에 ++를 표기하면 ++ 연산자를 실행을 먼저해서 2가 출력된다. 반대로, ++ 연산자를 뒤에 표기하면 1이 먼저 출력된다.

```

alert(num++)	=> alert(num)	-> num=num+1
alert(++num)	=> num=num+1	-> alert(num)
```

### if/else절

```
if(조건문){
    실행문1
    실행문2
}
실행문3

거짓 실행문3
참 실행문 1 2 3

```

- if 안에 있는 조건식이 참인 경우 해당하는 if문, else if문을 실행 한다.
- 조건문(if, else if)에 모두 해당하지 않으면 else에 있는 statement3 이 실행된다. 
- else if에는 갯수 제한이 따로 없다.



위와 같이 실행문3을 실행시키지 않을 경우에는 아래와 같은 코드로 작성한다.

```
const date = new Date()
const hours = date.getHours()
	if(hours < 12){
		alert(`현재 시간은 ${hours} 시입니다. 그래서 오전입니다.`)
	}
	else{
		alert(`현재 시간은 ${hours} 시입니다. 그러므로, 오후입니다.`)
	}

```
if는 조건식을 작성할 때 참일 경우에는 실행문이 모두 실행하나 else를 작성할 시에는 else에 해당되는 실행문은 실행되지 않는다.

### else if

조건식이 3개로 이뤄진 경우 아래와 같은 코드를 작성할 수 있다.
```
if(조건문1){
    if(조건문2){
        실행문1
    }else{
        실행문2
    }
}else{
    if(조건문3){
        실행문3
    }else{
        실행문4
    }
}
```
#### if문의 중첩

if문은 중첩해서 사용할 수 있다.

```
const date = new Date()
const hours = date.getHours()
if(hours < 11){
	alert(`아침식사시간입니다.`)
	}
	else{
	if(hours >= 12){
		alert("점심식사 시간입니다.")
	}else{
		alert("저녁식사 시간입니다.")
	}
}
        
```
if절을 중첩해서 사용할 수 있지만 else if문을 사용해서 더 깔끔하게 작성할 수 있다.

```
if(조건문){
    실행문
}else if(조건문){
    실행문
}else{
    실행문
}
```
예시)
```
const date = new Date()
const hours = date.getHours()
if(hours < 11){
	alert(`아침식사 시간입니다.`)
	}
	else if(hours >= 12){
		alert("점심식사 시간입니다.")
	}
	else{
		alert("저녁식사 시간입니다.")
}
```

#### 조건식 거짓으로 취급하는 값

1) false
2) undefined
3) null
4) 0
5) NaN
6) the empty string ("")


### Switch문

```
switch(값){
    case 조건
    실행문
    case 조건
    실행문
    case 조건
}
```
하지만, 스위치문으로 작성할 경우, 원하지 않는 case가 발생하기 때문에 밑 부분에 break;를 작성하면 된다. Switch 문 마지막에는 default: 를 입력하면 된다.

```
        const ivalue = Number(prompt("숫자를 입력하세요","0~100"))
        switch(ivalue%2){
        case 0:
            alert("짝수입니다.")
            break;
        case 1:
            alert("홀수입니다.")
            break;
        default:
            alert("숫자가 아닙니다. 확인해보세요")
        }     
```

- case 뒤에는 해당하는 조건이 오며, 그 아래에 실행할 명령문을 적는다.
 
- default는 if...else 조건문에서의 else와 같이 모든 조건에 해당 안 될 때 실행된다.

### 삼항 연산자

JavaScript에서 세 개의 피연산자를 취할 수 있는 연산자다. 맨 앞에 조건문 들어가고. 그 뒤로 물음표(?)와 조건이 참truthy이라면 실행할 식이 물음표 뒤로 들어간다. 바로 뒤로 콜론(:)이 들어가며 조건이 거짓falsy이라면 실행할 식이 마지막에 들어간다. 보통 if 명령문의 단축 형태로 쓰인다.

#### 구문

```
condition ? exprIfTrue : exprIfFalse 
```

#### 매개변수

```
condition (조건문)
조건문으로 들어갈 표현식
exprIfTrue (참일 때 실행할 식)
condition이 Truthy일 때 실행되는 표현식입니다. (true일 때 치환될 값입니다).
exprIfFalse (거짓일 때 실행할 식)
condition이 falsy일 때 실행되는 표현식입니다. (false일 때 치환될 값입니다).
```
아래는 삼항 조건 연산자를 출력하는 코드이다.

```
const ivalue = prompt("숫자입력")
const num = Number(ivalue)
const result = (num >= 0)?'0이상의 숫자':'0보다 작은 숫자'
        alert(result)
```

```
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// 위의 코드는 아래의 코드와 동일합니다.

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
```
[삼항 조건 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)