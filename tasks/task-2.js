const prompt = require("prompt-sync")();

function Calculator() {
    this.a = Number.MIN_SAFE_INTEGER;
    this.b = Number.MIN_SAFE_INTEGER;

    this.read = function read() {
        this.a = Number(prompt("a:"));
        this.b = Number(prompt("b:"));
    }

    this.sum = function sum() {
        return this.a + this.b;
    }

    this.mul = function mul() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();
console.log(`Sum:${calculator.sum()}`);
console.log(`Mul:${calculator.mul()}`);