# Sum
Sum 함수는 표현식의 합산 값을 반환한다.

```
SELECT sum(aggregate_expression)
FROM tables
[WHERE conditions];
```

```
SELECT sum(Profit) AS "Total Profit"
FROM sales;

SELECT sum(quantity) AS "Total Quantity"
FROM orders where product_id = "FUR-TA-10000577"
```