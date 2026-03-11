export default class CoffeeMachine {
    _waterAmount = 100;

    get waterAmount() {
        return this._waterAmount;
    }

    set waterAmount(amount) {
        this._waterAmount = amount;
    }
}