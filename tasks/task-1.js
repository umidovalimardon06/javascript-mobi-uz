function makeCounter() {
    let count = 0;

    function counter() {
        count++;
        return count;
    }

    function decrease() {
        count--;
        return count;
    }

    function set(value) {
        count = value;
    }

    return {
        counter,
        decrease,
        set
    };
}

let counter = makeCounter();

console.log(counter.counter());
console.log(counter.counter());
console.log(counter.decrease());
counter.set(10);
console.log(counter.counter());