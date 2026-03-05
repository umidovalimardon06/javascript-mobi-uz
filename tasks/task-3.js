function truncate(str,maxLength) {
    let sliced = "";
    if (str.length > maxLength) {
         sliced = str.slice(0,maxLength) + "...";
    }
    return sliced;
}

console.log(truncate("What I'd like to tell on this topic is:",20));