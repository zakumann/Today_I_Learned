## ORDER BY

ORDER BY 절은 결과 집합의 레코드를 정렬하는 데 사용됩니다.

```
SELECT "칼럼 이름"
FROM "테이블 이름"
[WHERE "상태"]
ORDER BY "칼럼 이름" [ASC, DESC];

한 개 이상의 칼럼을 경우에는 이렇게 쓴다.

ORDER BY "칼럼 이름1" [ASC, DESC], "칼럼2" [ASC, DESC]
```

ex)
```
SELECT * FROM customer
WHERE state = 'California' ORDER BY Customer_name;

SELECT * FROM customer
ORDER BY 2 DESC;

SELECT * FROM customer
WHERE age>25 ORDER BY City ASC, Customer_name DESC;

SELECT * FROM customer
ORDER BY age;
```