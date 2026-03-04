let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130
}

function sumSalaries(inputObject) {
    let sumOfAllSalaries = 0;
    for (let key in inputObject) {
        if (typeof inputObject[key] === "number") {
            sumOfAllSalaries += salaries[key];
        }
    }
    return sumOfAllSalaries;
}

console.log(sumSalaries(salaries));