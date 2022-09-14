function solution(arr){ //배열
    let answer=[];
    let sum=0, min=Number.MAX_SAFE_INTEGER; //초기값은 0으로 잡아둔다. max_safe_integer은 최대 정수값이다.
    for(let i of arr){ //for ... of를 통해 속성 값을 통해 반복한다.
        if(i%2===1){ //i값이 2와 나눠서 나머지가 1일 경우,
            sum+=i; //sum값에 더한다.
            if(i<min) min=i;    //만약에 i의 값이 최소값보다 작으면 최소값은 i다.
        }
    }
    answer.push(sum); //answer에 sum값을 push 한다.
    answer.push(min); //answer에 min값을 push 한다.
    return answer;
}

let arr=[12,77,38,41,53,92,85];
console.log(solution(arr));