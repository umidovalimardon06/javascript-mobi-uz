function camelize(str) {
    let splitStr = str.split('-');
    let result = "";
    for (let i = 0; i < splitStr.length; i++) {
        if (i !== 0) {
            result += transformFirst(splitStr[i]);
        } else {
            result += splitStr[i];
        }
    }
    return result;
}

function transformFirst(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(camelize("list-style-image"));