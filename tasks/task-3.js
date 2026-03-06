const prompt = require("prompt-sync")();

function sumCallback(total, x) {
    return total + x;
}

function sumInput() {
    let array = [];
    while (true) {
        let inputValue = prompt("Enter a value:");
        if (inputValue === "" || inputValue === null || !isFinite(inputValue)) {
            break;
        }
        array.push( Number(inputValue));
    }
    let sum = array.reduce(sumCallback);
    return sum;
}

console.log(sumInput());