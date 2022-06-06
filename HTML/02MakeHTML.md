### HTML파일 만들기

VisualStudio Code를 통해서 html파일 앞에 이름을 작성하면 html 파일이 생성된다.

"파일이름.html"

#### 1단계 문서 유형 지정하기
웹 문서의 첫 번째 줄에는 반드시 <!DOCTYPE html>태그처럼 문서 유형을 지정하는 소스를 넣어야 한다.

#### 2단계 <html>태그 입력하기
웹 문서의 시작과 끝은 각각 <html>과 </html> 태그로 표시해야 한다.

#### 3단계 사용하는 언어 지정하기
<html>태그 안에 lang=""처럼 속성 뿐만 아니라 큰따옴표까지 자동으로 입력되면서 커서가 큰따옴표 안에 위치한다. 그럼 한국어를 사용한다면 'ko'를 입력하면 언어 지정이 끝난다.

#### 4단계 <head>,<meta>,<title> 태그 입력하기
HTML 문서의 기본 구조는 크게 <head>태그와 <body>태그로 나뉜다. 
- <head>태그 사이에는 문자 세트(<meta>)와 문서 제목(<title>)을 입력해야 한다.

#### 5단계 <body> 태그와 <h1> 태그 입력하기
'<body>'태그 입력 이후, 그 사이에 <h1>태그를 추가한다.

### <h1>태그의 내용 입력하고 저장하기

완성
---------
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>첫 번째 문서 연습</title>
    </head>
    <body>
        <h1>웹 문서 만들기</h1>
    </body>
</html>

[첫 문서로 돌아가기](https://github.com/zakumann/Today_I_Learned/blob/main/README.md)