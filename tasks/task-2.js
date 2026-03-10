let i = 0;

setTimeout(() => console.log("Here is schedule:"), 100);

for(let j = 0; j < 10000; j++) {
    i++;
    console.log(i);
}

/* birinchi loop ishlaydi,schedule call stackdan
 tashqarida(callback queue)da saqalandi.*/
