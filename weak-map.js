// we can't use keys as primitives:
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj,"ok");
/*weakMap.set("test","value"); -> this is the problem */


let john = { name: "John" };

let weakMap2 = new WeakMap();
weakMap2.set(john, "...");

john = null;

console.log(weakMap);