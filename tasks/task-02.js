let object = {};

function isEmpty(inputObject) {
    for (let key in object) {
        return false
    }
    return true;
}

console.log(isEmpty(object));