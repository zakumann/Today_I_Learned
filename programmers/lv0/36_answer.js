function solution(l, r) {
    const zeroAndFive = []
    for(let i=l;i<=r;i++){
        if(i.toString().replace(/[05]/g,'').length === 0){
            zeroAndFive.push(i)
        }
    }
    const answer = zeroAndFive.length === 0 ? [-1] : zeroAndFive
    return answer
}

/*Alternative solution
function* gen50(){
    let i = 1;

    while(true){
        yield Number(Number(i).toString(2)) * 5;
        i++;
    }
}
function solution(l, r){
    const n = gen50();
    let a = 0;
    const arr = [];

    while(a < l){ a = n.next().value; }
    while(a <= r){ arr.push(a); a = n.next().value; }

    return arr.length ? arr: [-1];
}

*/