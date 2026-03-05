function checkSpam(str) {
    let uppercaseForm = str.toUpperCase();

    if (uppercaseForm.indexOf("VIAGRA") !== -1 ||
        uppercaseForm.indexOf("XXX") !== -1) {
        return true;
    }
    return false;
}

console.log(checkSpam("dsaljdViAgRAdsakljdsla"));
console.log(checkSpam("thereisnoviagr or but xxx"));
console.log(checkSpam("thereisnoviagr nor xx21"));