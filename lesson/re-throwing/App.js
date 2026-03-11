try {
    blblbl;
} catch (err) {
    if (err instanceof ReferenceError) {
        console.log("Handled: " + err.message);
    } else {
        throw err;
    }
}