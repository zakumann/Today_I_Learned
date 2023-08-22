function solution(arr, queries) {
    return queries.reduce((acc, cur, idx, origin) => {
        const copyAcc = [...acc]
        const [to, from] = cur
        const box = acc[to]
        copyAcc[to] = copyAcc[from]
        copyAcc[from] = box
        return copyAcc
    }, [...arr])
}

/*Alternative solution

function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}

*/

/*
function solution(arr, queries) {
    for(let [i, j] of queries) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
*/