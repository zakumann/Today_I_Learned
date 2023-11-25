# Count

COUNT 함수는 표현식의 개수를 반환한다.

```
SELECT "칼럼 이름1", COUNT ("칼럼 이름2")
FROM "테이블 이름"
```

```
SELECT COUNT(*) FROM sales;

SELECT COUNT (order_line) as "Number of Products Ordered",
COUNT (DISTINCT order_id) AS "Number of Orders"
FROM sales WHERE customer_id = 'CG-12520';
```