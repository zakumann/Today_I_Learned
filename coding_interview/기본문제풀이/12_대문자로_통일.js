function solution(s){
    let answer="";
    for(let i of s){
        let num=i.charCodeAt();
        if(num>=97 && num<=122){//소문자의 아스키 넘버는 97~122이다.
            answer+=String.fromCharCode(num-32);
        }else{
            answer+=i;
        }
    }
    // for(let i of s){
    //     if(i===i.toLowerCase()){ // 만약에 i가 소문자일 경우,
    //         answer+=i.toUpperCase(); // i값을 대문자로 변환한다.
    //     }else{ //그게 아닐경우,
    //         answer+=i; //i값을 더한다.
    //     }
    // }
    return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));