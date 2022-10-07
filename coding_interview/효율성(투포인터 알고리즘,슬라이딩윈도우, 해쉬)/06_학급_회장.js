//학급 회장 
//기호 : A,B,C,D,E+

function solution(s){
    let answer;
    let sH = new Map();
    for(let x of s){
        //물어보는 것이 있나 x의 key이 존재하는지
        if(sH.has(x))
            //sH.get을 사용하여 기존의 값을 가져오고 거기서 +1을 해줘라
            sH.set(x, sH.get(x)+1);
        else
            //key가 존재하지 않으면 새로운 키를 생성해서 1로 만들어라
            sH.set(x,1);
    }
    // console.log(sH);
    let max = Number.MIN_SAFE_INTEGER;
    //key에는 key값인 BACBACCACCBDEDE
    //value에는 value값인 233522 값이 들어감.
    for(let [key, value] of sH){
        console.log(key,value);
        if(value > max){
            max= value;
            //max의 값이 아닌 key값이 정답
            answer = key;
        }
    }

    return answer;
}
let str = "BACBACCACCBDEDE";
console.log(solution(str));