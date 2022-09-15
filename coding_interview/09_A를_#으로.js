function solution(s){
    // let answer="";
    // for(let x of s){
    //     if(x==='A'){
    //         answer+="#";
    //     }else{
    //         answer+=x;
    //     }
    // }
    let answer=s;
    answer=answer.replace(/A/gi,'#');
    return answer;
}

let str="CanAda";
console.log(solution(str));