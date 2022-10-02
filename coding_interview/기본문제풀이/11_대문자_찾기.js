function solution(s){
    let answer=0;
    for(let i of s){
        if(i===i.toUpperCase()){
            answer++;
        }
    /////////////
    //let num=i.charCodeAt();
    //  if(num>=65 && num<=90){
    //      answer++;
    //   }
    /////////////
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));