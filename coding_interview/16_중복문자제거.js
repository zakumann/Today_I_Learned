// function solution(str){
//     let answer = ""; 
//     let pos=str.indexOf('k');
//     while(pos!==-1){
//         answer++;
//         pos=str.indexOf('k',pos+1);
//     }

//     return answer;
// }
// let str="ksekkset";
// console.log(solution(str));

function solution(str){
    let answer="";
    for(let i=0; i<str.length; i++){
        // console.log(str[i],i,str.indexOf(str[i]));
        if(i===str.indexOf(str[i])){
           answer+=str[i];
        }
    }

    return answer;
}
let str="ksekkset";
console.log(solution(str));