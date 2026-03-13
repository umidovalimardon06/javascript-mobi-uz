import {isValid} from "./utils/helper.js";

function isPalindrome(n) {
    if (!isValid(n)) return false;

    let reversed = 0;
    let current = n;

    while (reversed < current) {
        reversed = reversed * 10 + current % 10;
        current = Math.floor(current / 10);
    }

    return reversed === current || Math.floor(reversed / 10) === current;
}

console.log(isPalindrome(121));

