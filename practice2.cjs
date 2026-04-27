const readline = require('readline-sync');
async function delayedHello(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello, World!"), ms);
    });
}

let input = readline.question('Enter a delay in milliseconds: ');
input = parseInt(input.trim());
(async () => {
    const result = await delayedHello(input);
    console.log(result);
})();