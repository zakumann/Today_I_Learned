function solution(my_string) {
    const strLen = my_string.length
    return [...my_string].reduce((acc, cur, idx) => {
        const curStr = my_string.slice(idx, strLen)
        return [...acc, curStr]
    }, []).sort()
}

/*
function solution(ms) {
    const array = []
    for (let i = 1; i <= ms.length; i++){
        array.push([...ms].reverse().slice(0,i).reverse().join(''))
    }
    return array.sort()
}
*/

/*
function solution(my_string) {
  return Array.from(my_string)
    .map((_, i) => my_string.substring(i))
    .sort();
}
*/

/*
function solution(st) {
    var answer = [];

    for(let i = 0; i<st.length; i++){
        answer.push(st.substr(i,st.length))
    }

    return answer.sort();
}
*/