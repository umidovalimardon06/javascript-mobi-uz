let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function countProperties(obj) {
    let count = 0;
    for (const val of Object.keys(obj)) {
        count++;
    }
    return count;
}

console.log(countProperties(salaries));