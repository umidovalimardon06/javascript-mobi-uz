let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

let nestedObjJson = JSON.stringify(meetup);
console.log(nestedObjJson);