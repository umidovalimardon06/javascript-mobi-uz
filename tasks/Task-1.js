class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "Format-error"
        this.stack = "stack";
    }
}

try {
    /* faraz qilaylik foramt error bo'ldi*/
    throw new FormatError("Format error happened here.");
} catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}

