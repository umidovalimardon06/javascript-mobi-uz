let hamster = {
    stomach: [],

    eat(food) {
        this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

speedy.eat("apple");

console.log(`speedy - ${speedy.stomach}`);
console.log(`lazy - ${lazy.stomach}`);