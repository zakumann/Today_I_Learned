## AND&OR

AND/OR 값을 준다.

```
SELECT "칼럼 이름"
FROM "테이블 이름"
WHERE "단순 상태"
{[AND|OR] "단순상태"};
```

```
SELECT first_name, last_name, age
FROM customer_table
WHERE age>20
AND age<30;
```

```
SELECT first_name, last_name, age
FROM customer_table
WHERE age <20
OR age>30
OR first_name='John';
```

## NOT

```
SELECT "칼럼 이름"
FROM "테이블 이름"
WHERE NOT "단순 상태"
```

```
SELECT first_name, last_name, age
FROM employee
WHERE NOT age =25
```

```
SELECT first_name, last_name, age
FROM employee
WHERE NOT age=25
AND NOT first_name='JAY';
```