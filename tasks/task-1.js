let user = {
    name : "John",
    years : 30
};

let name = user.name;
let age = user.years;
let isAdmin = user.hasOwnProperty("isAdmin");

console.log(name);
console.log(age);
console.log(isAdmin);