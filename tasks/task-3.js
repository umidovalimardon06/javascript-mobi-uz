function filterRangeInPlace(arr,min,max) {
    let filteredArray = [];
    for (let i of arr) {
        if (isInTheRange(i)) {
            filteredArray.push(i);
        }
    }

    function isInTheRange(i) {
        return (min <= i && i <= max);
    }
    return filteredArray;
}

let array = [5,3,8,1];
let result = filterRangeInPlace(array,1,4);
console.log(result);

















