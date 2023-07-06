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

  //My Solution:-
  // insert(val) {
  //   let newNode = new Node(val);
  //   let current = this.root;

  //   if (!current) {
  //     this.root = newNode;
  //   } else {
  //     while (true) {
  //       if (newNode.val > current.val) {
  //         if (current.right) {
  //           current = current.right;
  //         } else {
  //           current.right = newNode;
  //           return this;
  //         }
  //       } else if (newNode.val < current.val) {
  //         if (current.left) {
  //           current = current.left;
  //         } else {
  //           current.left = newNode;
  //           return this;
  //         }
  //       } else {
  //         return undefined;
  //       }
  //     }
  //   }
  //   return this;
  // }
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
// console.log(tree.insert(3));

// console.log(tree.insert(3));
// console.log(tree.insert(7));

// Refactored Solution
// class BinarySearchTree {
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         var newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }
//         var current = this.root;
//         while(true){
//             if(value === current.value) return undefined;
//             if(value < current.value){
//                 if(current.left === null){
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if(current.right === null){
//                     current.right = newNode;
//                     return this;
//                 }
//                 current = current.right;
//             }
//         }
//     }
// }
