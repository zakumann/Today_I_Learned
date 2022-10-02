function solution(arr1, arr2){
    let answer=[];
    let n = arr1.length; //첫번째 배열
    let m = arr2.length; //두번째 배열
    let p1 = p2 = 0;
    while(p1<n && p2<m){ //첫번째 배열에 arr1이 주어지고 두번째 배열에 arr2이 주어지는 동안,
        if(arr1[p1] <= arr2[p2]) // arr1의 p1이 arr2의 p2보다 작거나 같다면
            answer.push(arr1[p1++]); //오름차순으로 오른다. push는 넣는다를 의미한다.
        else
            answer.push(arr2[p2++]); //두번째 배열에 arr2의 배열이 오른다.
    }
    while (p1<n) answer.push(arr1[p1++]); //p1이 n보다 작을 동안, arr1값의 p1을 push한다.
    while (p2<m) answer.push(arr2[p2++]); //p2가 m보다 작을 동안, arr2값의 p2를 push한다.

    return answer;
}
let a = [1,3,5];
let b = [2,3,6,7,9];
console.log(solution(a, b));