function solution(a,b,c){
    let answer;
    if (a<b){
        answer = a;
    } else if (b<c){
        answer = b;
    } else {
        answer = c;
    }
    return answer;
}
console.log(solution(6,5,11));