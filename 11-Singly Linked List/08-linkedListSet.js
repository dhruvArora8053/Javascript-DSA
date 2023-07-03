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
    let prev = temp;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  // pop() {
  //   if (!this.head) return undefined;
  //   var current = this.head;
  //   var newTail = current;
  //   while (current.next) {
  //     newTail = current;
  //     current = current.next;
  //   }
  //   this.tail = newTail;
  //   this.tail.next = null;
  //   this.length--;
  //   if (this.length === 0) {
  //     this.head = null;
  //     this.tail = null;
  //   }
  //   return current;
  // }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const temp = this.head;
    this.head = this.head.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let count = 0;
    let current = this.head;

    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
}
const list = new SinglyLinkedList();
list.push("Hello").push("Goodbye").push(99);

console.log(list.set(1, 44));
console.log(list);

console.log(list.set(6, 33));
console.log(list.set(-1, 22));
console.log(list);
