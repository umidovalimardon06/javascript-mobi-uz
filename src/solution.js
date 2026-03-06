let handleSqrt = (inputValue) => {
    if (typeof inputValue === "number") {
        return getSqrt(inputValue);

    } else if (typeof inputValue === "boolean") {
        return 'error';

    } else if (typeof inputValue === "string") {
        inputValue = Number(inputValue);
        if (isNaN(inputValue)) return 'error';
        return  getSqrt(inputValue);

    } else if (typeof inputValue === "undefined") {
        return "undefined-error";

    } else if (typeof inputValue === "object") {
        if (inputValue === null) {
            return "null-error";

        } else if (Array.isArray(inputValue)) {
            const sum = inputValue
                .filter(isNumCallback)
                .reduce(getSumCallback,0);

            return getSqrt(sum);

        } else {
            let sum = 0;
            for (const key in inputValue) {
                if (typeof inputValue[key] === "number") sum += inputValue[key];
            }
            return getSqrt(sum);
        }
    }
}

function isNumCallback(x) {
    return typeof x === "number";
}

function getSumCallback(total,x) {
    return total + x;
}

function getSqrt(inputValue) {
    if (inputValue < 0) return "negative-error";
    return Math.sqrt(inputValue);
}
