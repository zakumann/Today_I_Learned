## DELETE

DELETE 쿼리는 테이블 내에 있는 존재하는 값을 지우기 위해서 사용된다.

```
DELETE FROM "테이블 이름"
WHERE "상태";
```

### Single row
```

DELETE FROM customers
WHERE id = 6;
```

### Multiple rows
```

DELETE FROM customers
WHERE age>25;
```

### All rows(**주의: 모든 테이블을 삭제해버림.**)
```

DELETE FROM customers;
```

ex)
```
DELETE FROM customer_table WHERE cust_id = 6;

DELETE FROM customer_table WHERE age>30;
```