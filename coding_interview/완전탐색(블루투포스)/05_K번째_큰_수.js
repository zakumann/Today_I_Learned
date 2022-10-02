function solution(n, k, card){
    let answer;
    // set을 통해서 중복값 제외하고 tmp에 저장
    let tmp = new Set();
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            for(let k=j+1; k<n; k++){
                // tmp에 카드 3개 골라서 저장
                tmp.add(card[i]+card[j]+card[k]);
            }
        }
    }
    // 새로운 배열 만들어 오름차순으로 정렬
    let a=Array.from(tmp).sort((a, b)=>b-a);
    // 배열의 3번째 값을 찾아야하므로 newArr[2]
    answer=a[k-1];
    return answer;
}

let arr = [13,15,34,23,45,65,33,11,26,42];
console.log(solution(10, 3, arr));