let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};

meetup.place = room;
room.occupiedBy = meetup;

console.log(JSON.stringify(meetup));