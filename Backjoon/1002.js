/*터렛

문제
조규현과 백승환은 터렛에 근무하는 직원이다. 하지만 워낙 존재감이 없어서 인구수는 차지하지 않는다. 다음은 조규현과 백승환의 사진이다.



이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각 자신의 터렛 위치에서 현재 적까지의 거리를 계산했다.

조규현의 좌표 
$(x_1, y_1)$와 백승환의 좌표 
$(x_2, y_2)$가 주어지고, 조규현이 계산한 류재명과의 거리 
$r_1$과 백승환이 계산한 류재명과의 거리 
$r_2$가 주어졌을 때, 류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 
$T$가 주어진다. 각 테스트 케이스는 다음과 같이 이루어져 있다.

한 줄에 공백으로 구분 된 여섯 정수 
$x_1$, 
$y_1$, 
$r_1$, 
$x_2$, 
$y_2$, 
$r_2$가 주어진다.

출력
각 테스트 케이스마다 류재명이 있을 수 있는 위치의 수를 출력한다. 만약 류재명이 있을 수 있는 위치의 개수가 무한대일 경우에는 
$-1$ 출력한다.

제한
 
$-10\,000 ≤ x_1, y_1, x_2, y_2 ≤ 10\,000$ 
 
$1 ≤ r_1, r_2 ≤ 10\,000$ 
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = ['7', '0 0 13 40 0 37', '0 0 3 0 7 4', '1 1 1 1 1 5', '40 0 37 0 0 13', '0 7 4 0 0 3', '1 1 5 1 1 1', '0 0 3000 4000 2500 2500']
 
 
const numOfInputs = parseInt(input[0]);
 
for(let i = 1; i <= numOfInputs; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(el => parseInt(el))
 
  const p1 = {x: x1, y: y1}
  const p2 = {x: x2, y: y2}
 
  // sqet(root)를 취하는 경우 소수점의 오차 때문에 비교가 힘들기 때문에 제곱된 값을 그대로 사용
  const squaredDistance = getSquaredDistance(p1, p2)
  console.log(findPointsCount(squaredDistance, r1, r2))
}
 
function getSquaredDistance(p1, p2) {
  return ((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2)
}
 
function findPointsCount(d, r1, r2) {
  const squaredSumR = (r1 + r2) ** 2
  const squaredDiffR = (r1 - r2) ** 2
 
  if(d == 0) {
    // 원점이 같을 때
    if(r1 == r2) return -1
    return 0
  } else {
    if(d > squaredSumR || d < squaredDiffR) {
      // Case4 : 0개일때
      return 0
    } else if(d == squaredDiffR || d == squaredSumR){
      // case 1,2: 1개일때(내접 또는 외접)
      return 1
    } else if(d < squaredSumR){
      // case 3: 2개일떄
      return 2
    }
  }
}