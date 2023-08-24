function solution(n) {
    const result = []
    let val = n
    while(val !== 1){
        result.push(val)
        if(val%2 == 0){
            val /= 2
        }else {
            val = 3 * val + 1
        }
    }
    result.push(1)
    return result
}

/*Alternative solution

function solution(n, arr = []) {
    arr.push(n)
    if (n === 1) return arr
    if (n % 2 === 0) return solution(n / 2, arr)
    return solution(3 * n + 1, arr)
}
*/