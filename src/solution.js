let handleSqrt = (inputValue) => {
    if (typeof inputValue === "number") {
        return getSqrt(inputValue);

    } else if (typeof inputValue === "boolean") {
        return 'error';

    } else if (typeof inputValue === "string") {
        inputValue = Number(inputValue);
        return  getSqrt(inputValue);

    } else if (typeof inputValue === "object") {
        if (Array.isArray(inputValue)) {
            const squareRootedArray = [];
            for (let i of inputValue) {
                squareRootedArray.push(getSqrt(i));
            }
            return squareRootedArray;

        } else {
            let sum = 0;
            for (const key in inputValue) {
                if (typeof inputValue[key] === "number") sum += inputValue[key];
            }
            return getSqrt(sum);
        }
    }
}


function getSqrt(inputValue) {
    return Math.sqrt(inputValue);
}