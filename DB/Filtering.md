## IN
IN 조건은 SELECT, INSERT, UPDATE 또는 DELETE 문에서 여러 OR 조건을 사용할 필요성을 줄이는 데 사용됩니다.

```
SELECT "칼럼 이름"
FROM "테이블 이름"
WHERE "칼럼 이름" IN ('값1','값2',...);
```

ex)
```
SELECT *
FROM customer
WHERE city IN ('Philadelphia','Seattle')


SELECT *
FROM customer
WHERE city = 'Philadelphia' OR city = 'Seattle';
```

## BETWEEN

BETWEEN 조건은 SELECT, INSERT, UPDATE 또는 DELETE 문 범위 내에 값을 검색할 때 쓰인다.

```
SELECT "칼럼 이름"
FROM "테이블 이름"
WHERE "칼럼 이름" BETWEEN "값1" AND "값2";
```

ex)
```
SELECT * FROM customer
WHERE age BETWEEN 20 AND 30;

which is same as

SELECT * FROM customer
WHERE age >= 20 AND age <= 30;

SELECT * FROM customer
WHERE age NOT BETWEEN 20 AND 30;

SELECT * FROM sales
WHERE ship_date BETWEEN '2015-04-01' AND '2016-04-01';
```

## LIkE

Like 조건을 사용하면 와일드카드를 사용하여 패턴 일치를 수행할 수 있습니다.

```
SELECT "칼럼 이름"
FROM "테이블 이름"
WHERE "칼럼 이름" LIKE {PATTERN};

{PATTERN} often consists of wildcards
```


|Wildcard|Explanation|
|:------:|-----------|
|%|Allows you to match any string of any length(including zero length)|
|_|Allows you to match on a single character|

<br>
A%는 ABC나 ABCDE처럼 A로 시작하는 걸 의미한다.
%A는 A가 끝에 있는 것을 말한다.
A%B는 A를 시작으로 B가 끝인 것을 말한ㄷ.

AB_C는 AB로 시작하고, 하나의 문자 다음에 C가 있는 걸 말한다.


ex)
```
SELECT * FROM customer
WHERE customer_name LIKE 'J%;

SELECT * FROM customer
WHERE customer_name LIKE '___%';

SELECT distinct city FROM customer
WHERE city NOT LIKE 'S%';

SELECT * FROM customer
WHERE customer_name LIKE 'G\%';
```

**DISTINCT**는 중복을 제거할 때 쓰인다.