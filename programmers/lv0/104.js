/*정수 부분
문제 설명
실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ flo ≤ 100
입출력 예
flo	result
1.42	1
69.32	69
입출력 예 설명
입출력 예 #1

1.42의 정수 부분은 1입니다.
입출력 예 #2

69.32의 정수 부분은 69입니다.
*/

// function solution(flo) {
//     var answer = 0;
//     return answer;
// }

function solution(flo) {
    var answer = 0;
    return Math.floor(flo);
}

/*
function solution(flo) {
    var answer = Math.trunc(flo);   
    return answer;
}
*/