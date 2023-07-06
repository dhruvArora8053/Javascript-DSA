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
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    const data = [];
    let current = this.root;

    const traverse = function (node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }

  DFSPostOrder() {
    const data = [];
    let current = this.root;

    const traverse = function (node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    };
    traverse(current);
    return data;
  }

  DFSInOrder() {
    const data = [];
    let current = this.root;

    const traverse = function (node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    };
    traverse(current);
    return data;
  }
}

const tree = new BinarySearchTree();

//      10
//   6     15
// 3  8      20

tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);
console.log(tree);

console.log(tree.DFSInOrder());
