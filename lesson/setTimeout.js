function delay() {
    console.log("delay started:");
    let start = Date.now();
    let delay = 10000;
    let end = start + delay;
    while (Date.now() <= end) {
    }
    console.log("delay completed:");
}

function sendMsg(msg,who) {
    console.log("start sendMsg()")
    console.log("...");
    console.log(`${msg} --> ${who}`); // call-stack-tugagach.
}

delay(); // 1
let schedule = setTimeout(sendMsg,5000,"Hello","Arthur"); // goes into callback queue.
clearTimeout(schedule);
delay(); // 2