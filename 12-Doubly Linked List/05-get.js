"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
    }

    this.length -= 1;
    removed.prev = null;
    return removed;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.length -= 1;
    return removed;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
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

    const mid = Math.abs(this.length / 2);

    if (index <= mid) {
      let countStart = 0;
      let currentNext = this.head;
      while (index !== countStart) {
        countStart++;
        currentNext = currentNext.next;
      }
      return currentNext;
    } else {
      let currentPrev = this.tail;
      let countEnd = this.length - 1;
      while (index !== countEnd) {
        countEnd--;
        currentPrev = currentPrev.prev;
      }
      return currentPrev;
    }
  }
}

const list = new DoublyLinkedList();
list.push(12).push(24).push(36).push(48).push(60).push(72);
console.log(list);

console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
console.log(list.get(4));
console.log(list.get(5));
console.log(list);
