let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

function removeSelf(key,value) {
    if (key !== "" && value === meetup) {
        value = undefined;
    }
    return value;
}

let meetupJson = JSON.stringify(meetup,removeSelf);
console.log(meetupJson);
