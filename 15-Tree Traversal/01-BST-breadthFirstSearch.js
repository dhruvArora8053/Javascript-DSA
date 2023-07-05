"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          return undefined;
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false;
    }

    let current = this.root;

    while (true) {
      if (current.val === val) {
        return [true, current];
      } else if (current.val > val) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      } else if (current.val < val) {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  breadthFirstSearch() {
    let data = [];
    let queue = [];
    let node = 0;

    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
    }
  }
}

const tree = new BinarySearchTree();

//      10
//   5     13
// 2  7  11  16

console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.insert(16));
console.log(tree.insert(7));
