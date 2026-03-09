import {firstNames,lastNames,middleNames,countries} from "../data/Data.js";
import {random} from "../utils/Random.js";

function AthleteBuilder () {
    this.firstName = firstNames[random(0,firstNames.length-1)];
    this.lastName = lastNames[random(0,lastNames.length-1)];
    this.middleName = middleNames[random(0,middleNames.length-1)];
    this.country = countries[random(0,countries.length-1)];
    this.age = random(18,35);

    this.goldMedals = 0;
    this.silverMedals = 0;
    this.bronzeMedals = 0;

    this.increaseMedals = function (plusGold, plusSilver, plusBronze) {
        if (!Number.isFinite(plusGold) || !Number.isFinite(plusSilver) || !Number.isFinite(plusBronze)) return "invalid incr amount";
        if (plusGold < 0 || plusSilver < 0 || plusBronze < 0) return "invalid incr amount";

        this.goldMedals += plusGold;
        this.silverMedals += plusSilver;
        this.bronzeMedals += plusBronze;
    }

    this.decreaseMedals = function (minusNGold, minusNSilver, minusNBronze) {
        if (!Number.isFinite(minusNGold) || !Number.isFinite(minusNSilver) || !Number.isFinite(minusNBronze)) return "invalid dec amount";
        if (minusNGold < 0 || minusNSilver < 0 || minusNBronze < 0) return "invalid dec amount";
        if (this.goldMedals < minusNGold || this.silverMedals < minusNSilver || this.bronzeMedals < minusNBronze) return "invalid dec amount";

        this.goldMedals -= minusNGold;
        this.silverMedals -= minusNSilver;
        this.bronzeMedals -= minusNBronze;
    }

    this.compareTo = function (other) {
        let thisScore  = (this.goldMedals * 3 + this.silverMedals * 2 + this.bronzeMedals);
        let otherScore = (other.goldMedals * 3 + other.silverMedals * 2 + other.bronzeMedals);

        if (thisScore > otherScore) return 1;
        if (thisScore < otherScore) return -1;
        return 0;
    }

    this.clone = function () {
        let copy = {};
        copy.firstName = this.firstName;
        copy.lastName = this.lastName;
        copy.middleName = this.middleName;
        copy.country = this.country;
        copy.age = this.age;
        copy.goldMedals = this.goldMedals;
        copy.silverMedals = this.silverMedals;
        copy.bronzeMedals = this.bronzeMedals;
        copy.increaseMedals = this.increaseMedals;
        copy.decreaseMedals = this.decreaseMedals;
        copy.compareTo = this.compareTo;
        copy.clone = this.clone;
        return copy;
    }
}

export {AthleteBuilder};