const user = {};

Object.assign(user,{name:'John'});
Object.assign(user,{surname:'Smith'});
Object.assign(user,{name:'Pate'});

delete user.name;

console.log(user);