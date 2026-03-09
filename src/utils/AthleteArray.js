import {AthleteBuilder} from "../models/AthleteBuilder.js";

export let athletesArray = function getAthletesArray(countOfElements) {
    let athleteArray = [];
    for(let i = 1; i <= countOfElements; i++) {
        let athlete = new AthleteBuilder();
        athleteArray.push(athlete);
    }
    return athleteArray;
}