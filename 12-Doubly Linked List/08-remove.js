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

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    const newNode = new Node(val);

    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return this.unshift();
    } else if (index === this.length) {
      return this.push();
    } else {
      const prevNode = this.get(index - 1);

      newNode.next = prevNode.next;
      prevNode.next.prev = newNode;

      prevNode.next = newNode;
      newNode.prev = prevNode;
      this.length += 1;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      return this.shift(index);
    } else if (index === this.length - 1) {
      return this.pop(index);
    } else {
      const targetNode = this.get(index);
      const prevNode = targetNode.prev;

      prevNode.next = targetNode.next;
      targetNode.prev = prevNode;

      targetNode.prev = null;
      targetNode.next = null;
      this.length -= 1;
      return targetNode;
    }
  }
}

const list = new DoublyLinkedList();
list.push(12).push(24).push(36).push(48).push(60).push(72);
console.log(list);

console.log(list.remove(-1, 24));
console.log(list.remove(10, 24));
// list.remove(0);
// list.remove(3);
list.remove(5);
console.log(list);
