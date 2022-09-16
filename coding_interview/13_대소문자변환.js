function solution(s){
    let answer="";
    for(let i of s){
        if(i===i.toUpperCase()){
            answer+=i.toLowerCase();
        }else {
            answer+=i.toUpperCase();
        }
    }
    return answer;
}
let str = "StuDY";
console.log(solution(str));