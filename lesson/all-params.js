let user = {
    name: "Ali",
    age: 25,
    password: "12345",
    address : {
        street : "Direct 17",
        postalCode : 10000
    }
};

let jsonReplacerArray = JSON.stringify(user,["name","age"]);
let jsonReplacerFunction = JSON.stringify(user,removePassword);

function removePassword(key,value) {
    if (key === "password") {
        return undefined;
    }
    return value;
}

console.log(jsonReplacerFunction);




