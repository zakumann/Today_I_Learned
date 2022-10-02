function solution(s){
    let answer, max=Number.MIN_SAFE_INTEGER; //answer의 최대값은 최소정수값이다.
    for(let i of s){ //s내에서 i를 살피는 동안,
        if(i.length>max){//i의 길이중에서 가장 긴 것은
            max=i.length; //최대값으로 간주되어져
            answer=i; //지정된다.
        }
    }

    return answer;
}

let str=["teacher","time","student","beautiful","good"];
console.log(solution(str));