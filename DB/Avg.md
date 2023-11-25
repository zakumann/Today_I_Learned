# AVG

AVG 함수는 평균 값의 표현식을 반환한다.

```
SELECT avg(aggregate_expression)
FROM tables
[WHERE conditions];
```

```
SELECT avg(age) AS "Average Customer Age"
FROM customer;

SELECT avg(sales * 0.10) AS "Average Commission Value"
FROM sales;
```