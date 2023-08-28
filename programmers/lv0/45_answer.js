function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach(a => {
        var sliceStr = a.slice(s, s+l)
        var num = Number(sliceStr)
        if(num > k) answer.push(num)
    })
    return answer
}

/*Alternative solution

function solution(intStrs, k, s, l) {
    return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}
*/

/*
function solution(intStrs, k, s, l) {
    return intStrs.reduce((bucket, intStr) => {
        const v = Number(intStr.slice(s, s + l))
        if (v > k) bucket.push(v)
        return bucket
    }, [])
}
*/