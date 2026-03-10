let animal = {
    eats: true,
    walk() {
        console.log("Animal walks.")
    }
};

let rabbit ={
    jumps : true
}

rabbit.__proto__ = animal;
console.log(rabbit.eats);
console.log(rabbit.jumps);
rabbit.walk();

// -----------------------
let longEar = {
    earLength : 100
}

longEar.__proto__ = rabbit;
console.log(longEar.eats);
console.log(longEar.jumps);
longEar.walk();
console.log(longEar.earLength);


