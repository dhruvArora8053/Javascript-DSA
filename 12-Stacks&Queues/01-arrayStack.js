"use strict";

//STACK --> LIFO(Last In First Out)

const stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
console.log(stack);

stack.pop();
console.log(stack);

stack.push("amazon");
stack.pop();

// Another way
const photoShopStack = [];
photoShopStack.unshift("create new file");
photoShopStack.unshift("resize file");
photoShopStack.unshift("clone out wrinkle");
console.log(stack);

photoShopStack.shift();
console.log(photoShopStack);

// Problem with shift and unshift: re-indexing each and every element

// If you want to use stack using array then use push and pop methods
