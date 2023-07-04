"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    let temp = this.first;

    if (!this.first) {
      return undefined;
    } else if (this.first === this.last) {
      let temp = this.first;
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.size -= 1;
    return temp;
  }
}

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue);

console.log(queue.dequeue());
console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
