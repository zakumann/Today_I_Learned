function solution(s){
    let answer="YES";
    s=s.toLowerCase();
    // let len=s.length;
    // for(let i =0;i<Math.floor(len/2); i++){
    //     if(s[i]!==s[len-i-1]){
    //         return "NO";
    //     }
    // }
    if(s.split('').reverse().join('')!==s){
        return "NO";
    }

    return answer;
}
let str ="gooot";
console.log(solution(str));
