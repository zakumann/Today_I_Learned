## UPDATE

UPDATE 쿼리는 테이블에 있는 존재하는 값을 변경하는 데 쓰인다.

```
UPDATE "테이블 이름"
SET 칼럼_1=[값1], 칼럼_2=[값2], ...
WHERE "상태";
```

ex)

```
Single row(with column names specified)

UPDATE Customer_table
SET Age = 17, Last_name = 'Pe'
WHERE Cust_id = 2;
```

```
Multiple rows

UPDATE Customer_table
SET email_id = 'gee@xyz.com'
WHERE First_name = 'Gee' or First_name='gee';
```

