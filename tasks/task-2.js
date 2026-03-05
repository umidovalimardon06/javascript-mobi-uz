const prompt = require("prompt-sync")();

function readNumber() {
    let inputValue = Number(prompt("enter the value (exit:0): "));
    while (Number.isNaN(inputValue)) {
        inputValue = Number(prompt("re-enter the value (exit:0): "));
    }
    if (inputValue === 0) return null;
    return inputValue;
}

console.log(readNumber());