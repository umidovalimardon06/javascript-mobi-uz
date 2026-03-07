let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];
let usersMapped = mapper(users);


console.log(usersMapped);

function mapper(arrayOfObjects) {
    let processedArrayOfObjs = [];
    for (let i of arrayOfObjects) {
        let processedArray = [];
        processedArray.push(`${i.name} ${i.surname}`);
        processedArray.push(i.id);
        processedArrayOfObjs.push(processedArray);
    }
    return processedArrayOfObjs;
}

