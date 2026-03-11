export default class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

export let  errorThrower = function errorThrowerFunction(msg) {
    throw new ValidationError(msg);
}