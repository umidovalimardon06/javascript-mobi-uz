let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function retrieveUniqueElements(arr) {
    let set = new Set();
    for (let value of values) {
        set.add(value);
    }
    return set;
}

console.log(retrieveUniqueElements(values));