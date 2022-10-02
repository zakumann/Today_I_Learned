function solution(str){
    let answer;

    // if(s.length %2 ==0){//짝수일 경우,
    //     answer = s[s.length/2-1] + s[s.length/2]; //s값의 길이에 2를 나누고 1을 뺀 값+ s값의 길이에 2를 나눈 값의 합
    // }else{
    //     answer = s[Math.floor(s.length/2)]; // 홀수일 경우, 반내림 하기
    // }
    let mid = Math.floor(str.length/2)
    if(str.length%2==1){
        answer=str.substring(mid, mid+1);
    }else{
        answer=str.substring(mid-1,mid+1);
    }

    return answer;
}
let str="study";
console.log(solution(str));