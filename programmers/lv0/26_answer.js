function solution(a, d, included) {
    const arr = [a]
    for(let i = 1; i < included.length; i++){
        arr[i] = arr[i-1] + d
    }
    
    return arr.reduce((acc, cur, idx) => included[idx] ? acc+cur : acc, 0)
}
/*

reduce 메서드는 네 개의 인자를 가지고 있다.
누산기(acc) , 현재값(cur), 현재 인덱스(idx), 원본 배열(src)

function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}

*/
