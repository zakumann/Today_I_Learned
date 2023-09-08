function solution(my_string, indices) {
    var answer = '';

    for(i=0;i<my_string.length;i++){
        if(!indices.includes(i)){
            answer += my_string[i]
        }
    }
    
    return answer;
}