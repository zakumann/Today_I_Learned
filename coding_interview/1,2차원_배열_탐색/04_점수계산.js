function solution(){
    let answer=0, cnt=0;
    for(let i of arr){
        if(i===1){
            cnt++;
            answer+=cnt;
        }
        else cnt=0;
    }
    return answer;
}

let arr=[1,0,1,1,1,0,0,1,1,0];
console.log(solution(arr));