//Queue --> FIFO(First In First Out)

const queue = [];

//Adding elements
queue.push("First");
queue.push("Second");
queue.push("Third");
console.log(queue);

//Removing elements
queue.shift();
queue.shift();
queue.shift();
console.log(queue);

//problem with shift: re-indexing each and every left element

//Adding elements
queue.unshift("First");
queue.unshift("Second");
queue.unshift("Third");

//problem with unshift: when we add a new element we are re-idexing every other element of an array

//Removing Elements
queue.pop();
queue.pop();
queue.pop();

//We could use array for stacks if we are using push and pop but for queues there in no-way we can get O(1) using arrays because of the above reason so we will be difinitely needing to implement our own queue
