let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let salary = 0;
    let name = null;

    for(let [n, s] of Object.entries(salaries)) {
        if (salary < s) {
            salary = s;
            name = n;
        }
    }
    return name;
}

console.log(topSalary(salaries));