# Map, filter, reduce

👉 map()
map메소드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
map1이 x => x * 2 이 식으로 계산된 새로운 배열로 반환됩니다.

요소들에게 일괄적으로 함수를 적용하고 싶을 때 사용하기 적합.

👉 filter()
filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
result는 길이가 6이상인 단어들만 모아 새로운 배열로 반환됩니다.

오직 boolean타입만 반환합니다.
리턴 값이 true인 경우에만 배열에 추가하기 때문에 중복 제거처럼 조건에 맞는 특정 요소들만 새 배열에 넣고 싶은 경우 사용에 적합.

👉 reduce()
배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
map, filter같은 함수형 메서드를 reduce만으로도 구현할 수 있습니다.