function Calculator() {
    this.calc = function (str) {
        let split = str.split(' ');
        let numOne = Number(split[0]);
        let operator = split[1];
        let numTwo = Number(split[2]);
        switch (operator) {
            case "+" : {
                return numOne + numTwo;

            } case "-" : {
                return numOne -numTwo;

            } default : {
                return "undefined operator!"
            }
        }
    }
}

let calculator = new Calculator;

let result = calculator.calc("1 - 10");
console.log(result);