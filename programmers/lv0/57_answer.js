function solution(start, end_num) {
    return Array.from({length: start-end_num + 1}, (_,i) => start - i);
}