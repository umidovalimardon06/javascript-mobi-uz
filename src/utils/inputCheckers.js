export let validInputForInc =  function validInputForInc(plusNGold, plusNSilver, plusNBronze) {
    if (!Number.isFinite(plusNGold) || !Number.isFinite(plusNSilver) || !Number.isFinite(plusNBronze)) return false;
    return !(plusNGold < 0 || plusNSilver < 0 || plusNBronze < 0);
}

export let validInputForDec = function validInputForDec(minusNGold, minusNSilver, minusNBronze) {
    if (!validInputForInc(minusNGold, minusNSilver, minusNBronze)) return false;
    return !(this.goldMedals < minusNGold || this.silverMedals < minusNSilver || this.bronzeMedals < minusNBronze);
}