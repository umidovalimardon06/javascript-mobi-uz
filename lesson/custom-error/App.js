import ValidationError from "./error/ValidationError.js";
import {errorThrower} from "./error/ValidationError.js";

try {
    errorThrower("Something wrong!!!");
} catch (err) {
    console.log(err.message);
}