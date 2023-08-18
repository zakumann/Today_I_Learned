function solution(n) {
    var answer = 0;
    
    if(n % 2 == 1){
        for(var i = 1; i<=n; i+=2){
            answer += i;
        }
    } else{
        for(var i = 2; i<=n; i+=2){
            answer += Math.pow(i,2);
        }
    }
    return answer;
}

/*
function solution(n){
    if(n%2 == 0)
        return n*(n+1)*(n+2)/6;
    else 
        return (n+1)/2*((n+1)/2);
}
*/