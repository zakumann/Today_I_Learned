## WHERE

WHERE은 특정 조건에 부합하는 데이터를 조회하고 싶을 때 사용하는 절이다.

```
SELECT "칼럼 이름"
FROM "테이블 이름"
WHERE "상태";
```

아래는 WHERE을 사용하는 예시이다.
```
동등한 상태

SELECT first_name FROM customer_table WHERE age=25;

비교문(Less than/ Greater than)
SELECT first_name, age FROM customer_table WHERE age>25;

문자 매칭
SELECT * FROM customer_table WHERE first_name ="John";
```

