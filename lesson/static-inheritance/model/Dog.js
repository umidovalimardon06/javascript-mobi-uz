import Animal from "./Animal.js";

export default class Dog extends Animal {
    static greet() {
        return `this is overridden method here`;
    }
}