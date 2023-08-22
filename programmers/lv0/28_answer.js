function solution(num_list) {
    let add = 0;
    let mul = 1;
    for(i = 0; i < num_list.length; i++){
        mul *= num_list[i];
        add += num_list[i];
    }
    add = add*add;
    if(mul < add){
        return 1;
    }return 0;
}

/* Alternative solution

function solution(num_list) {
    let accMul = 1
    let accSum = 0
    for (const num of num_list) {
        accMul *= num
        accSum += num
    }
    return accMul < accSum ** 2 ? 1 : 0
}

*/

/*

function solution(num_list) {
    let mul = num_list.reduce((a, c) => {return a*c ;}, 1);
    let sum = num_list.reduce((a, c) => {return a+c ;}, 0);
    return (mul < sum*sum) ? 1 : 0;
}

*/