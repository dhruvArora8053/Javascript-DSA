"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size += 1;
    return this;
  }

  pop() {
    let current = this.first;

    if (!this.first) {
      return undefined;
    } else if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      current.next = this.first;
      current.next = null;
    }
    return --this.size;
  }
}

const stack = new Stack();
stack.push(1).push(2).push(3);
console.log(stack);

console.log(stack.pop());
console.log(stack);
