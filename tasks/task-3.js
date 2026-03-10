function getLocaleDay(date) {
    let dayIndex = date.getDay();
    return dayIndex;
}

let date = new Date(2012, 0, 3);
console.log(getLocaleDay(date));