function solution(k,arr){
    let answer, sum = 0, max = Number.MAX_SAFE_INTEGER;

    for( let i = 0; i<k; i++) sum += arr[i];// i값은 k값 만큼, 배열의 i값씩 더해간다. 여기서 k는 3으로 지정한다면, 3까지 반복된다.
    answer = sum; //38

    for (let i = k; i < arr.length;i++){ //i값이 배열의 길이보다 작을 때, i값씩 더해가는데,
        sum += arr[i] - arr[i - k];
        answer = Math.max(answer, sum);
       
    }
    return answer;
}

let a = [12,15,11,20,25,10,20,19,13,15]; //입력예제의 배열을 나열한다.
console.log(solution(3,a));