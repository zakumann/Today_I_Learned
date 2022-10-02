function solution(str){
    let answer;
    // console.log(str.indexOf("good"));
    answer=str.filter(function(v,i){
        if(str.indexOf(v)===i){
            return true;
        }
    });
    return answer;
}

let str = ["good","time","good","time","studnet"]
console.log(solution(str));