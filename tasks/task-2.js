function getWeekDay(date) {
    let dayIndex = date.getDay();
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[dayIndex];
}

let date = new Date(2014, 0, 3);
console.log(getWeekDay(date));