class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} speaks!`)
    }
}

class Dog extends Animal {
    constructor(name,dogColor) {
        super(name);
        this.color = dogColor;
    }

    speak() {
        console.log(`${this.name} barks!`)
    }
}

let bob = new Dog("Bob","white");
console.log(bob);
bob.speak();