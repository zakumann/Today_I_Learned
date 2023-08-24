function solution(start_num, end_num) {
    return Array(start_num ? end_num : end_num + 1).fill(0).map((_, i) => i+start_num).slice(0, end_num-start_num+1)
}

/*Alternative solution

function solution(start_num, end_num) {
    idx = start;
    return Array.from({length: end_num-start_num+1}, ()=> {return start++});
}
*/