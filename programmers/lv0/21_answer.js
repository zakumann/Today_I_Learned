function solution(number, n, m) {
    if(number % n == 0 && number % m == 0){
        return 1
    }else{
        return 0
    }
}

/*Alternative solution

function solution(number, n, m){
    return +!(number % n || number % m);
}

*/