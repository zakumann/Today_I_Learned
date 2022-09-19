function solution(s){
    let answer=0;
    for(let x of s){
        if(!isNaN(x)){
            answer=answer*10+Number(x);
        }
    }
    return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));