let handleSqrt = (inputValue) => {
    switch (true) {
        case (typeof inputValue === "number"):
            return getSqrt(inputValue);

        case (typeof inputValue === "boolean"):
            return 'error';

        case (typeof inputValue === "string"):
            inputValue = Number(inputValue);
            if (isNaN(inputValue)) return 'error';
            return getSqrt(inputValue);

        case (typeof inputValue === "undefined"):
            return "undefined-error";

        case (inputValue === null):
            return "null-error";

        case (Array.isArray(inputValue)):
            const sumArray = inputValue
                .filter(isNumCallback)
                .reduce(getSumCallback, 0);
            return getSqrt(sumArray);

        case (typeof inputValue === "object"):
            let sumObj = 0;
            for (const key in inputValue) {
                if (typeof inputValue[key] === "number") sumObj += inputValue[key];
            }
            return getSqrt(sumObj);

        default:
            return 'error';
    }
}

function isNumCallback(x) {
    return typeof x === "number";
}

function getSumCallback(total, x) {
    return total + x;
}

function getSqrt(inputValue) {
    if (inputValue < 0) return "negative-error";
    return Math.sqrt(inputValue);
}