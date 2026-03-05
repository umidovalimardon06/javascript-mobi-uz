function random(min, max) {
    return Math.round(min + Math.random() * (max - min + 1));
}

console.log(random(1, 10));