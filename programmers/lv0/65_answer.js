function solution(str_list) {
    var result = [];
    
    const firstLidx = str_list.indexOf('l') === -1 ? Infinity : str_list.indexOf('l')
    const firstRidx = str_list.indexOf('r') === -1 ? Infinity : str_list.indexOf('r')
    
    let isLeft
    
    if(firstLidx === Infinity && firstRidx === Infinity) return result
    
    if(firstLidx < firstRidx){
        isLeft = true
    } else {
        isLeft = false
    }
    
    if(isLeft){
        for(i=0; i<firstLidx; i++){
            result.push(str_list[i])
        }
    } else {
            for(i= firstRidx+1; i < str_list.length; i++){
                result.push(str_list[i])
            }
        }
    return result
}

/*
function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'l') return arr.slice(0, i);
        if (arr[i] === 'r') return arr.slice(i + 1);
    }
    return [];
}
*/