/*
function PersonA(name,age) {
    this.name = name;
    this.age = age;
    return this;
}
function PersonB(name,age) {
    this.name = name;
    this.age = age;
    return this;
}

const ali1  = new PersonA('Ali',18);
const ali2  = new PersonB('Ali',18);

console.log(ali1 == ali2);*/

let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() );







