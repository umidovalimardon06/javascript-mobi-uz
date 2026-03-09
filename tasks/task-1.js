let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumValues(obj) {
    let sum = 0;
    for (const val of Object.values(obj)) {
        sum += val;
    }
    return sum;
}

console.log(sumValues(salaries));