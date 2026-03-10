function counter(start,end) {
    let count = start;   // private variable

    let id = setInterval(() => {
        console.log(count);
        if (count === end) {
            clearInterval(id);
        }
        count++;
    },1000);
}

counter(1,10);