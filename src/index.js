import {AthleteBuilder} from "./models/AthleteBuilder.js";

let athlete = new AthleteBuilder();
athlete.increaseMedals(1,3,5);
console.log(athlete);

let athleteClone = athlete.copy();
console.log(athleteClone);