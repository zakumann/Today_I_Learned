# AS

AS 키워드는 칼럼이나 테이블에 별칭을 할당하는 데 사용된다. 컬럼 이름과 컬럼 별칭 사이 또는 테이블 이름과 테이블 별칭 사이에 삽입된다.

```
SELECT "칼럼 이름 " AS "칼럼 별칭"
FROM "테이블 이름";
```

ex)
```
SELECT Cust_id AS "Serial number", "Customer_name" AS name, Age AS Customer_AGE
FROM Customer;
```