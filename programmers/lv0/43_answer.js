function solution(number) {
    return number.split('').map(Number).reduce((a,b) => a+b)%9
}

/*

const solution=n=>BigInt(n)%9n
*/