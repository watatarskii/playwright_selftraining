const readline = require('readline-sync');

function multiplyAll(numbers) {
    return numbers.map(x => x * 2);
}

let input = readline.question('Enter a list of numbers separated by commas: ');
let arr = input.split(',').map(x => parseInt(x.trim()));

console.log(multiplyAll(arr));