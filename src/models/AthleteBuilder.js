import {firstNames,lastNames,middleNames,countries} from "../data/data.js";
import {random} from "../utils/random.js";
import {validInputForInc,validInputForDec} from "../utils/inputCheckers.js";

function AthleteBuilder () {
    this.firstName = firstNames[random(0,19)];
    this.lastName = lastNames[random(0,19)];
    this.middleName = middleNames[random(0,19)];
    this.country = countries[random(0,19)];
    this.age = random(18,35);

    this.goldMedals = 0;
    this.silverMedals = 0;
    this.bronzeMedals = 0;

    this.increaseMedals = function (plusGold,plusSilver,plusBronze) {
        if (validInputForInc(plusGold,plusSilver,plusBronze)) {
            this.goldMedals += plusGold;
            this.silverMedals += plusSilver;
            this.bronzeMedals += plusBronze;
        } else return "invalid incr amount";
    }

    this.decreaseMedals = function (minusNGold, minusNSilver, minusNBronze) {
        if (validInputForDec(minusNGold,minusNSilver,minusNBronze)) {
            this.goldMedals -= minusNGold;
            this.silverMedals -= minusNSilver;
            this.bronzeMedals -= minusNBronze;
        } else return "invalid dec amount";
    }

    this.copy = function () {
        let clone = {};
        clone.firstName = this.firstName;
        clone.lastName = this.lastName;
        clone.middleName = this.middleName;
        clone.country = this.country;
        clone.age = this.age;
        clone.goldMedals = this.goldMedals;
        clone.silverMedals = this.silverMedals;
        clone.bronzeMedals = this.bronzeMedals;
        clone.increaseMedals = this.increaseMedals;
        clone.decreaseMedals = this.decreaseMedals;
        clone.copy = this.copy;
        return clone;
    }
}

export {AthleteBuilder};