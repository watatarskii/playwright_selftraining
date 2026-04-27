const readline = require('readline-sync');
function multiplyAll(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 2;
    }

    return numbers;
}

let input = readline.question('Enter a list of numbers separated by commas: ');
let arr = input.split(',').map(x => parseInt(x.trim()));

console.log(multiplyAll(arr));