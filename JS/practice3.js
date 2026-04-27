async function main() {
    console.log('a');
    setTimeout(() => console.log('b'), 0);
    await Promise.resolve();
    console.log('c');
}
main();
console.log('d');