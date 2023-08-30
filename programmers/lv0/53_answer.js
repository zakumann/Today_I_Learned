function solution(q, r, code) {
    return [...code]
}

/*
function solution(q, r, code) {
    return Array.from(code).reduce((result, word, i) => {
        if (i % q === r) return result + word
        return result
    }, '')
}
*/

/*
function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join('');
}
*/