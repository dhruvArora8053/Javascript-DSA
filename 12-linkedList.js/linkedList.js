"use strict";

// piece of data --> val
// reference to next node --> node

// let first = new Node("HI");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length -= 1;
    return temp;
  }
}

const list = new SinglyLinkedList();
list.push("Hello");
console.log(list);

list.push("Goodbye");
list.push(99);
console.log(list.head.next.next);

list.traverse();

console.log(list.pop());
console.log(list);

console.log(list.pop());
console.log(list);

list.push(999);
console.log(list);

console.log("-----------------------------");
