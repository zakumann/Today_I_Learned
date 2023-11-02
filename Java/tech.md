## 객체지향에 대해 설명하기

객체지향 프로그래밍은 프로그래밍에서 필요한 데이터를 추상화시켜 **상태와 행위**를 가진 객체로 만들고, 객체들 간의 상호작용을 통해 로직을 구성하는 프로그래밍 방법이다.

### 객체지향 프로그래밍의 특징은 4가지로

**캡슐화**, **상속**, **추상화**, **다형성**이다.

1.  캡슐화는  데이터 구조와 데이터를 다루는 방법들을 결합 시켜 묶는 것으로 낮은 결합도를 유지할 수 있도록 설계

2.  상속은 클래스의 속성과 행위를 하위 클래스에 물려주거나 하위 클래스가 상위 클래스의 속성과 행위를 물려받는 것을 말한다.

3.  추상화는 객체에서 공통된 속성과 행위를 추출하는 것으로 공통의 속성과 행위를 찾아서 타입을 정의하는 과정으로 불필요한 정보는 숨기고 중요한 정보만을 표현함으로써 프로그램을 간단하게 만드는 것

왜 필요한가?

- 자동차 브랜드를 예를 들어서, 추상화로 자동차를 구현해놓으면 다른 곳에서 코드를 수정할 필요 없이 추가로 만들 부분만 새로 생성해주면 된다.

4.  다형성은 하나의 변수명, 함수명이 상황에 따라 다른 의미로 해석될 수 있는 것을 말한다.

### 오버라이딩과 오버로딩

- 오버라이딩(overriding) : 상위 클래스가 가지고 있는 메소드를 하위 클래스가 재정의해서 사용하는 것

- 오버로딩(overloading) : 같은 이름의 메서드가 인자의 개수나 자료형에 따라 다른 기능을 하는 것

### MVC 패턴

#### MVC란?

모델, 뷰, 컨트롤의 약자로, 하나의 애플리케이션, 프로젝트를 구성할 때 그 구성요소를 세가지의 역할로 구분한 패턴입니다.

모델은 정보, 데이터를 나타냅니다.

뷰는 input 텍스트, 체크박스 항목 등과 같은 사용자 인터페이스 요소를 나타냅니다.

컨트롤은 데이터와 사용자인터페이스 요소들을 잇는 다리역할을 합니다.

#### 왜 사용하는가?

- 사용자가 보는 페이지, 데이터처리, 그리고 이 2가지를 중간에서 제어하는 컨트롤, 이 3가지로 구성되는 하나의 애플리케이션을 만들면 각각 맡은 바에만 집중ㅊ 할 수 있게 됩니다. 이것은 서로 분리되어 각자의 역할에 집중할 수 있게끔하여 개발을 하고 그렇게 애플리케이션을 만든다면, 유지보수성, 애플리케이션의 확장성, 그리고 유연성이 증가함으로써, 중복코딩이라는 문제점 또한 사라지게 되는 겁니다.

#### 의의

MVC패턴은 결국 어떻게 나눌 것인가에 대한 해답으로, 특정 역할에 대한 역할 분담을 할 때 가이드라인으로 사용되는 방법이다.

### JPA
ORM 기술 표준으로 사용하는 인터페이스의 모음으로, 실질적으로 구현된 것이 아닌 구현된 클래스와 매핑을 해주기 위해 사용되는 프레임워크이다.

#### 장점
- SQL문이 아닌 Method를 통해 DB를 조작할 수 있다. 이로 인해, 개발자는 객체 모델을 이용해서 비즈니스 로직을 구성하는데만 집중할 수 있다.
- Query와 같은 필요한 선언문, 할당 등의 부수적인 코드가 줄어들어, 각종 객체에 대한 코드를 별도로 작성하여 코드의 가독성을 높인다.
- 객체지향적인 코드 작성이 가능하다. 오직 객체지향적 접근만 고려하면 되기 때문에 생산성이 증가한다.