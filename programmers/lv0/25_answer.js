function solution(code) {
    let mode = 0; // mode를 0으로 맞춘다.
    return [...code].reduce((acc, cur, idx) => {
        if(mode){
            if(cur !== '1' && idx%2 === 1) return acc+cur
            if(cur === '1') mode = 0
        } else {
            if(cur !== '1' &&idx%2 === 0)return acc+cur
            if(cur === '1') mode = 1
        } 
        
        return acc
    }, "") || "EMPTY"
}

/*Alternative solutions

function solution(code) {
    let answer = '';
    let mode = 0;

    for (let i = 0; i < code.length; i += 1) {
      if (Number(code[i]) === 1) {
        mode = mode === 1 ? 0 : 1;
      }
      if (Number(code[i]) !== 1 && i % 2 === mode) {
        answer += code[i];
      }
    }
    return answer.length > 0 ? answer : 'EMPTY';
}

*/

/*
function solution(code) {
    let odd = false
    return Array.from(code).reduce((acc, v, i) => {
        if (v === '1') {
            odd = !odd
            return acc
        }
        return (i % 2 === (odd ? 1 : 0)) ? acc + v : acc
    }, '') || 'EMPTY'
}
*/