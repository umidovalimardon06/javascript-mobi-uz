try {
    console.log("start");
    somethingUndefined;
    console.log("end");
} catch (err) {
    console.log("Catch-block started executing:");
    console.log("------------------------------")
    console.log(err.name);
    console.log("------------------------------")
    console.log(err.message);
    console.log("------------------------------")
    console.log(err.stack);
    console.log("------------------------------")
}