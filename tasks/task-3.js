let ladder = {
    step: 0,
    up() {
        console.log(`${this.step} + 1`);
        this.step++;
        return this;
    },
    down() {
        console.log(`${this.step} - 1`);
        this.step--;
        return this;
    },
    showStep: function() {
        console.log(`current step: ${this.step}`)
        return this;
    }
};

ladder.up().up().up().showStep().down().showStep();