let numbers = {
    numberOne : 100,
    numberTwo : 160,
    numberThree : 130,
    test : "test"
}

function multiplyByNumeric(inputObject) {
    for (let key in inputObject) {
        if (typeof inputObject[key] === "number") {
            inputObject[key] = inputObject[key] * 2;
        }
    }
    return inputObject;
}

console.log(multiplyByNumeric(numbers));