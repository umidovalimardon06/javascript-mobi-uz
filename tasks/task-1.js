function ucFirst(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            newStr += str[i].toUpperCase();
        } else newStr += str[i];
    }
    return newStr;
}

console.log(ucFirst('hiii'))