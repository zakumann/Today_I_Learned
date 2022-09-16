function solution(day, arr){
    let answer=0;
    for(let i of arr){
        if(i%10===day){
            answer++;
        }
    }
    return answer;
}
arr=[12,20,54,30,87,91,30];
console.log(solution(0, arr));