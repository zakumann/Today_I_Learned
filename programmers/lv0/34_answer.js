function solution(arr, queries) {
    var answer = [];
    for(let [s,e,k] of queries){
        let temp = arr.filter((v,i) => (i>=s&&i<=e&&v>k)).sort((a,b)=>a-b)[0];
        answer.push(temp?temp:-1)
    }
    return answer;
}

/*Alternative solution

function solution(arr, queries) {
    return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
}
*/

/*
function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        let result = -1
        for (let i = s; i <= e; i += 1) {
            const v = arr[i]
            if (v <= k) continue
            result = result === -1 ? v : Math.min(result, v)
        }
        return result
    })
}
*/

/*
function solution(arr, queries) {
    let answer = [];

    for(let i=0;i<queries.length;i++) {
        const [s,e,k] = queries[i];
        const _arr = arr.slice(s,e + 1).filter((v) => v > k).sort((a, b) => a - b);
        answer.push(_arr.length === 0 ? -1 : _arr[0]);
    }

    return answer;
}
*/