function solution(my_string, is_suffix) {
    let arr = [];
    for(let i = 1; i <= my_string.length; i++){
        arr.push(my_string.substr(my_string.length-i));
    }
    return arr.includes(is_suffix) ? 1 : 0;
}

/*
const solution = (str, suff) => str.endsWith(suff) ? 1 : 0
*/

/*
function solution(my_string, is_suffix) {
    return my_string.slice(my_string.length - is_suffix.length) === is_suffix ? 1 : 0
}
*/