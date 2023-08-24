function solution(arr) {
    var stk = [];
    for(i=0; i<arr.length;i++){
        if(stk.length==0){
            stk.push(arr[i]);
        }else if(stk[stk.length-1]<arr[i]){
            stk.push(arr[i]);
        }else if(stk[stk.length-1]>arr[i]){
            stk.pop()
            i--
        }
    }
    return stk;
}
console.log(solution([1,4,2,5,3]))

/*Alternative solution

function solution(arr) {
    var stk = [];

    for(let i=0; i<arr.length; i++) {
        if(stk.length === 0) {
            stk.push(arr[i]);
            continue;
        }

        if(stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            continue;
        }

        stk.pop();
        i--;
    }

    return stk;
}
*/