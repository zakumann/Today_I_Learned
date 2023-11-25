# MIN/MAX

MIN/MAX 함수는 최소값/최대값의 표현식을 반환한다.

```
SELECT min(aggregate_expression)
FROM tables
[WHERE conditons];

SELECT max(aggregate_expression)
FROM tables
[WHERE conditions];
```

```
SELECT MIN(sales) AS Min_sales_June15
FROM sales
WHERE order_date BETWEEN '2015-06-01' AND '2015-06-30';

SELECT MAX(sales) AS Max_sales_June15
FROM sales
WHERE order_date BETWEEN '2015-06-01' AND '2015-06-30';
```