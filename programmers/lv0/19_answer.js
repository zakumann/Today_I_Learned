function solution(a, b) {
    const atob = String(a) + String(b)
    const ab2 = 2*a*b

    return atob >= ab2 ? Number(atob) : Number(ab2)
}

/*Alternative solution
function solution(a, b){
    let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
}

*/