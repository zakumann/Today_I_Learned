function solution(arr, intervals) {
    return intervals.reduce((acc, cur) => {
        const [from, to] = cur
        const curNums = arr.slice(from, to+1)
        return acc.concat(curNums)
    }, [])
}

/*
function solution(arr, intervals) {
    const [[a,b],[c,d]] = intervals;

    return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
}
*/