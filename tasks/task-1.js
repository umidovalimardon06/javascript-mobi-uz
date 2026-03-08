let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let messagesWeakSet = new WeakSet();
messagesWeakSet.add(messagesWeakSet[0]);
messagesWeakSet.add(messagesWeakSet[1]);
messagesWeakSet.add(messagesWeakSet[2]);