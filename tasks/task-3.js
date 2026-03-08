let map = new Map();
map.set("name", "John");

let keys = [];
for (let key of map.keys()) {
    keys.push(key);
}

keys.push("more");

console.log(keys);