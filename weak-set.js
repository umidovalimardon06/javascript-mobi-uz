// we can't use elements as primitives:
let weakSet = new WeakSet();

let obj = {};

weakSet.add(obj);
/* weakSet.add(1); -> this is the problem */
