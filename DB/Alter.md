## ALTER

ALTER 테이블은 존재하는 테이블의 정의나 구조를 바꿀 때 쓰인다.

```
ALTER TABLE "테이블 이름"
[행동지정];
```

다음과 같이 이행된다.

- 컬럼(Columns) : Add, Delete (Drop), Modify or Rename
- 제약조건(Constraints) : Add, Drop
- 인덱스(Index) : Add, Drop

Columns - ADD & DROP

ALTER TABLE은 테이블에 존재하는 칼럼을 추가 및 드롭(drop) 할 때 쓰인다.

```
ALTER TABLE "테이블 이름"
ADD "칼럼 이름" "데이터 타입";

ALTER TABLE "테이블 이름"
DROP "칼럼 이름";
```

COLUMN - MODIFY & RENAME

ALTER TABLE의 기본 syntax로 존재하는 테이블의 칼럼을 변경/재명의 한다.

```
ALTER TABLE "테이블 이름"
ALTER COLUMN "칼럼 이름" TYPE "새로운 데이터 타입";
*새로운 데이터 타입으로 변경시에는 PostgreSQL을 종료한 다음에 다시 실행시켜야 한다.

ALTER TABLE "테이블 이름"
RENAME COLUMN "칼럼1" TO "칼럼2";
```

```
1. ALTER TABLE "테이블 이름" ALTER COLUMN "칼럼 이름" SET NOT NULL;

2. ALTER TABLE "테이블 이름" ALTER COLUMN "칼럼 이름" DROP NOT NULL;

3. ALTER TABLE "테이블 이름" ADD CONSTRAINT "칼럼 이름" CHECK("칼럼 이름">=100);

4. ALTER TABLE "테이블 이름" ADD PRIMARY KEY ("칼럼 이름");

5. ALTER TABLE "자식 테이블" ADD CONSTRAINT "자식 칼럼" FOREIGN KEY ("부모 칼럼") REFERENCES "부모 테이블";
```