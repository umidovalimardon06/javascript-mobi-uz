let styles = ["Jazz","Blues"];

styles.push("Rock-in-Roll");
console.log(styles);

styles[Math.round(styles.length/2-1)] = "Classics";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rap","Reggae");
console.log(styles);