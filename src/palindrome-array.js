import {isValid, removeLastDigit,getLastDigit} from "./utils/helper.js";

function isPalindrome(n) {
    if (!isValid(n)) return false;

    let array = [];
    while (n > 0) {
        let lastDigit = getLastDigit(n);
        array.push(lastDigit);
        n = removeLastDigit(n);
    }

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if (array[left] !== array[right]) return false;
        left ++;
        right --;
    }

    return true;
}