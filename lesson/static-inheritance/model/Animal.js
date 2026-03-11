export default class Animal {
    static type = `Animal`;

    static greet() {
        return `I am a ${this.type}`;
    }
}