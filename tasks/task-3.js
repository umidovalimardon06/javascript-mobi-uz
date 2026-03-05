const prompt = require("prompt-sync")();

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function read() {
        this.value += Number(prompt("enter new value:"));
    }
}

let acc = new Accumulator(1);
acc.read();
acc.read();

console.log(acc.value);