let arr = ["a","b"];

arr.push(function () {
        console.log("this is a function inside an array");
    }
);

arr[2]();  // funksiyalar = first-class-object.
