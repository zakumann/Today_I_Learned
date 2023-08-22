function solution(num_list) {
    let even = num_list.filter(el => el % 2 === 0);
    let odd = num_list.filter(el => el % 2 === 1);
    
    let evenSum = even.reduce((acc, cur) => acc + String(cur));
    let oddSum = odd.reduce((acc, cur) => acc + String(cur));
    
    return Number(evenSum) + Number(oddSum);
}
/*Alternative Solution

function solution(num_list) {
    const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
        if (num % 2 === 0) {
            evens.push(num)
        } else {
            odds.push(num)
        }
        return { odds, evens }
    }, { odds: [], evens: [] })
    return Number(odds.join('')) + Number(evens.join(''))
}

*/

/*

function solution(num_list) {
    const odd = [...(num_list+"")].map(x => Number(x)%2 === 1 ? x : "").join("")
    const even = [...(num_list+"")].map(x => Number(x)%2 === 0 ? x : "").join("")
    return Number(odd)+Number(even);
}

*/