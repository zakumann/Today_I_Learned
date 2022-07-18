for (var i = 5; i >= 1; i--){  // 별 개수의 초기값 1; 최대 별 개수 5; 별개수는 1씩증가
  console.log(" ".repeat(5-i) + "*".repeat(i)); // 문자열.repeat(n)이라는 함수로 문자열을 n번 만큼 반복할 수 있다.
}