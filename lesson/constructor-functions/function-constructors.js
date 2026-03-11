function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`)
}

let user1 = new Person("Amir",19);
user1.greet();