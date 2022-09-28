function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let i of arr){
        let sum=i.toString().split('').reduce((a,b)=>a+Number(b), 0);
        console.log(sum);
        if(sum>max){
            max=sum;
            answer=i;
        }else if(sum===max){
            if(i>answer){
                answer=i;
            }
        }
    }

    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7,arr));