let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let studentString = JSON.stringify(student);
let parsedObjectFromString = JSON.parse(studentString);