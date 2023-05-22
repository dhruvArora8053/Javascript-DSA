"use strict";

// piece of data - val
// reference to next node - next

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
    const newNode = new Node(val);

    //for empty
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    //for non-empty
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.push("Hi");
list.push("You");
list.push(99);

console.log(list);
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);

list.traverse();