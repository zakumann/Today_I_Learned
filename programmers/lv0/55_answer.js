function solution(n, k) {
    var answer = [];
    for(i= k; i <=n; i+=k){
        answer.push(i);
    }
    return answer;
}

/*
const solution=(n,k)=>Array(~~(n/k)).fill(k).map((v,i)=>v*(i+1))
*/