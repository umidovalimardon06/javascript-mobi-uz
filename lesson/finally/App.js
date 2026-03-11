try {
    console.log("try-block:runs until error occurs");
} catch (err) {
    console.log("catch-block:skipped if there is no error");
} finally {
    console.log("finally-block:always runs");
}