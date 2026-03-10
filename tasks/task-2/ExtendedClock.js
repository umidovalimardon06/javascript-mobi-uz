class ExtendedClock extends Clock {
    constructor(template,precision) {
        super(template);
        this.precision = precision;
    }

    start() {
        this.timer = setInterval(() => this.render(),this.precision);
    }

}