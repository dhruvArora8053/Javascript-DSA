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

  shift() {
    if (!this.head) {
      return undefined;
    }

    const temp = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return temp;
  }
}

const list = new SinglyLinkedList();
list.push("Hello").push("Goodbye").push(99);

console.log(list.shift());
console.log(list);

console.log("-----------------------------");
