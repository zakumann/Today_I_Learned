const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    str.forEach((value, index) => {
        if (value === value.toUpperCase()){//value 값이 대문자로 바꾸는 value 값이 같을 경우,
            str[index] = value.toLowerCase(); //소문자로 변환된다.
        } else {// 그게 아닐 경우,
            str[index] = value.toUpperCase();//value값은 대문자로 변환된다.
        }
    });
    console.log(str.join(''));
});

//대문자 A는 65, 대문자 Z는 90이다. 소문자 a는 97이며, 소문자 z는 122이다.