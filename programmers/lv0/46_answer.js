function solution(my_strings, parts) {
    var answer = '';
    for(i=0;i<my_strings.length;i++){
        answer+=my_strings[i].split('').slice(parts[i][0],parts[i][1]+1).join('')
    }
    return answer;
}

/*

function solution(my_strings, parts) {
    return parts.map(([s, e], i) => {
        return my_strings[i].slice(s, e + 1)
    }).join('')
}
*/

/*

function solution(my_strings, parts) {
  return my_strings.reduce((result, str, i) => {
    const [s, e] = parts[i];
    return result + str.substring(s, e + 1);
  }, '');
}
*/