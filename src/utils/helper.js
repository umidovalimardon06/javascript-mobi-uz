export let isValid = function (n) {
    if (n < 0) return false;
    if (n === 0) return true;
    return n % 10 !== 0;
}

export let removeLastDigit = function (n) {
    return Math.floor( n / 10);
}
export let getLastDigit = function (n) {
    return n % 10;
}
