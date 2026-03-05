const prompt = require("prompt-sync")();

let calculator = {
    a : Number.MIN_SAFE_INTEGER,
    b : Number.MIN_SAFE_INTEGER,
    read() {
        this.a = Number(prompt("a:"));
        this.b = Number(prompt("b:"));
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

calculator.read();
console.log(`sum:${calculator.sum()}`);
console.log(`mul:${calculator.mul()}`);