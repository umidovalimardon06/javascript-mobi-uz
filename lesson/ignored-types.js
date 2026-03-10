let user = {
    sayHi() {
        console.log("Hello..");
    },

    [Symbol("id")] : 123,
    somethingMissing : undefined
};

let userJson = JSON.stringify(user);
console.log(userJson);