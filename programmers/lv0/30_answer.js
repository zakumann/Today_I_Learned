function solution(num_list) {
    let last = num_list[num_list.length-1]
    let last2 = num_list[num_list.length-2]
    if(last > last2){
        num_list.push(last-last2)
    }else {
        num_list.push(last*2)
    }
    return num_list
}

/*Alternative Solution

function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}

*/