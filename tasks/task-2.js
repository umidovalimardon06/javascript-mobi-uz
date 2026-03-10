function continuousSum(initialValue) {
    let sum = initialValue;
    function f(b) {
        sum += b;
        return f;
    }

    f.valueOf = function() {
        return sum;
    };

    return f;
}

console.log(continuousSum(1)(2)(7).valueOf());