function solution(my_string, m, c) {
    const table = [];
    let result = "";
    for(let i = 0; i < Math.floor(my_string.length/m); i++){
        const row = []
        for(let j = 0; j < m; j++){
            const cur = my_string[i*m+j]
            if(j+1 === c) result+= cur
            row.push(cur)
        }
        table.push(row)
    }
    return result
}

/*
const solution=(s,m,c)=>s.match(new RegExp(`.{${m}}`,'g')).map(v=>v[c-1]).join('')
*/

/*
function solution(my_string, m, c) {
    return Array.from(my_string).reduce((word, v, i) => {
        return i % m + 1 === c ? word + v : word
    }, '')
}
*/

/*
function solution(my_string, m, c) {
    return [...my_string].filter((_, i) => i % m === c - 1).join('');
}
*/