let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john,pete,mary];
let names = mapper(users);

console.log(names);

function mapper(arrayOfObjects) {
    let names = [];
    for (let obj of arrayOfObjects) {
        names.push(obj.name);
    }
    return names;
}
