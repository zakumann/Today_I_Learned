// function solution(){
//     let arr=[5,3,7,11,2,15,17];
//     let m = Math.min(...arr);
//     return m;
// }
// console.log(solution());

function solution(arr){
    let answer, min=arr[0];
    for(let i =0; i<arr.length;i++){
        if(arr[i]<min) min=arr[i];
    }
    answer=min;
    return answer;
}

let arr=[5,3,7,11,2,15,17]
console.log(solution(arr));