"use strict";

// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

class SinglyLinkedList {
  constructor(length) {
    this.head = null;
    this.tail = null;
    this.length = length;
  }

  push(val) {
    let i = 0;
    this.head = val;
    this.tail = new SinglyLinkedList(i++);
    this.length = i + 1;
  }
}

const list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("how");

console.log(list);
