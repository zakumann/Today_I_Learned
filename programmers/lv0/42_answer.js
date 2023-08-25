function solution(my_string, index_list) {
    var answer = "";
    for( let i of index_list){
        answer += my_string.slice(i,i+1);
    }
    return answer
}

/*Alternative solution

function solution(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('')
}

*/