let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj));

console.log(map);

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

console.log(prices);