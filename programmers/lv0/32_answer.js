function solution(numLog) {
    return numLog.reduce((acc, cur, curIdx, originArr) => {
        if(!curIdx) return ""
        const prev = originArr[curIdx-1]
        switch(prev-cur){
            case -1:
                return acc+'w'
            case 1:
                return acc+'s'
            case -10:
                return acc+'d'
            case 10:
                return acc+'a'
        }
    }, "")
}

/*Alternative solution
function solution(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('')
}
*/

/*
function solution(numLog) {
  //w +1,a-10,s-1,d+10

  let array = [...numLog]
  let answer = [];
  for(let i=0;i<array.length;i++){
    switch(array[i+1]-array[i]){
      case 1:
        answer.push('w')
        break;
      case -1:
        answer.push('s')
        break
      case 10:
        answer.push('d')
        break;
      case -10:
        answer.push('a')
        break;
    }
}
return answer.join('');
}
*/