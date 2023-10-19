## LIMIT

LIMIT문은 제한값을 기준으로 반환되는 레코드의 수를 제한하는데 사용된다. 

```
SELECT "칼럼 이름"
FROM "테이블 이름"
[WHERE conditions]
[ORDER BY expression [ASC|DESC]]
LIMIT row_count;
```

ex)
```
SELECT * FROM customer
WHERE age >= 25
ORDER BY age DESC
LIMIT 8;

SELECT * FROM customer
WHERE age >= 25
ORDER BY age ASC
LIMIT 10;
```