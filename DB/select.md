## SELECT 쿼리

### 데이터 선택

```
SELECT 조회하고 싶은 컬럼 이름 FROM 데이터베이스 이름;
```

### SELECT문 -LIMIT:출력 개수 지정

데이터양이 방대할 경우, LIMIT으로 조회하고자 하는 데이터의 숫자를 제한해줄 수 있다. 이때는 LIMIT 뒤에 숫자에 따라 출력양이 정해지게 된다. 조회되는 순서는 DB가 저장된 순서이다.

```
SELECT 조회하고 싶은 컬럼 이름 FROM 데이터베이스 이름 LIMIT 갯수;
```

### SELECT문 – ORDER BY: 오름차순/내림차순으로 정렬하기

오름차순은 영어 ASCENDING에서 따온 ASC를 사용하면 되고, 내림차순은 DESCENDING에서 따온 DESC를 사용하면 된다.

```
정렬하기

SELECT 컬럼이름 FROM DB이름 ORDER BY 기준컬럼 ASC(또는 DESC);
```

DB에서 몸무게가 가장 많이 나가는 선수를 찾고 싶다면, ORDER BY를 사용해서 내림차순으로 정렬하면 된다.

```
-- 'weight' 기준으로 오름차순 정렬
SELECT * FROM People ORDER BY weight ASC;

-- 'weight' 기준으로 내림차순 정렬
SELECT * FROM People 
ORDER BY weight DESC 
LIMIT 10;
```

### SELECT문 – WHERE: 조건을 걸어 필터링

WHERE은 특정 데이터를 조회할 때 유용하다.

WHERE에는 기본적인 비교 연산자(=, !=, >, <, >=, <= 등) 사용이 가능하다. 각 조건은 ‘AND’로 추가할 수 있고, 조건 값이 문자일 경우엔 ” 안에 넣으면 된다(숫자는 상관없음).

```
조건 걸기

SELECT 컬럼이름 FROM DB이름
WHERE 기준컬럼 = '조건값'; 
```

brithYear이 1990년이고 birthCountry가 USA인 선수를 조회하고 싶다면 아래와 같이 사용하면 된다.

```
1990년 미국에서 태어난 선수 필터링

SELECT * FROM People 
WHERE birthYear = '1990'
AND birthCountry = 'USA'
ORDER BY weight DESC 
LIMIT 10;
```

### SELECT문 – 집계함수(SUM, AVG, MIN, MAX, COUNT)

비교 연산자와 함께 기본적인 집계함수도 사용 가능하다. 엑셀 함수를 떠올리면 된다.

```
-- 조건 걸기
SELECT 집계함수(컬럼이름) FROM DB이름; 

-- 출생지가 미국인 선수의 전체 몸무게 합산(SUM)하기
SELECT SUM(weight) FROM People 
WHERE birthCountry = 'USA';

-- 출생지가 미국인 선수의 전체 몸무게 평균(AVG)내기
SELECT AVG(weight) FROM People 
WHERE birthCountry = 'USA';

-- 출생지가 미국인 선수의 전체 몸무게 최소값(MIN)내기
SELECT MIN(weight) FROM People 
WHERE birthCountry = 'USA';

-- 출생지가 미국인 선수의 전체 몸무게 최대값(MAX)내기
SELECT MAX(weight) FROM People 
WHERE birthCountry = 'USA';

-- 출생지가 미국인 선수의 전체 몸무게 데이터 개수(COUNT) 세기
SELECT COUNT(weight) FROM People 
WHERE birthCountry = 'USA';
```

###  SELECT문 – ||: 2개 이상의 컬럼을 합쳐서 조회하기

```
2개 이상 컬럼을 합쳐서 조회하기, (컬럼과 컬럼 사이는 공백(' ')으로 연결하기)
SELECT 컬럼이름1 || ' ' || 컬럼이름2 FROM DB이름; 
```

몸무게가 300 파운드 이상인 선수의 전체 이름 조회하기

```
SELECT nameFirst || ' ' || nameLast
AS full_name -- 컬럼 이름을 full_name으로 저장한다. AS를 사용하지 않으면 컬럼 이름은 nameFirst || ' ' || nameLast 을 기본으로 저장된다. 
FROM People 
WHERE weight >= '300'
LIMIT 5;
```

### SELECT문 – DISTINCT: 고유값(중복 제거) 조회

마지막으로 데이터의 중복을 제거하고 싶다면 DISTINCT를 사용하면 된다. DISTINCT는 COUNT(*)에는 사용할 수 없다는 것을 주의하자.
```
중복 제거하기

SELECT DISTINCT(컬럼이름) FROM DB이름;

전체 이름이 중복되는 데이터 삭제하기

SELECT DISTINCT(full_name) FROM People ;
```

### SELECT DISTINCT

```
SELECT DISTINCT "칼럼 이름" FROM "테이블 이름";
```

단일 칼럼 선택
```
SELECT DISTINCT 칼럼 이름 FROM 테이블 이름;
```

복수 칼럼 선택
```
SELECT DISTINCT 칼럼이름, 칼럼 이름 등등 FROM 테이블 이름;
```