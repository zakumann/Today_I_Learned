function solution(my_string, queries) {
    var answer = my_string.split(''); //my_string을 배열로 answer에 넣어준다.
    let result = '';
    // queries를 for...of 문으로 순환한다.
    for(let i of queries){
        let num = i[1]-i[0]
        // result에 answer배열에서 i[0]의 수부터 i[1]+1까지의 수를 reverse를 통해서 배열을 뒤집는다.
        result = answer.slice(i[0],i[1]+1).reverse();
        // answer의 i[0]인덱스부터 num개를 삭제한다.
        answer.splice(i[0],num+1)
        //answer에 x[0]인덱스에 result를 넣어준다. '...result'가 아닌 'result'를 넣어주면
        // [ 's', 'p', 'r', 'o', 'g', [ 'm', 'r' ], 'e', 'r' ] 이렇게 들어가기에 
        //...result해서 넣어준다.
        answer.splice(i[0],0,...result)
    }
    //배열 answer을 문자열로 바꿔준다.
    return answer.join('');
}

/*

function solution(my_string, queries) {
    let str = my_string.split('');
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join('');
}
*/