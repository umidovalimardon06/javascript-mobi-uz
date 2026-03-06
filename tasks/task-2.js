function filterRange(arr,min,max) {

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

console.log(filterRange([5, 3, 8],5,6));