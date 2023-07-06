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

  // find(val) {
  //   if (!this.root) {
  //     return false;
  //   }

  //   let current = this.root;

  //   while (true) {
  //     if (current.val === val) {
  //       return [true, current];
  //     } else if (current.val > val) {
  //       if (current.left) {
  //         current = current.left;
  //       } else {
  //         return false;
  //       }
  //     } else if (current.val < val) {
  //       if (current.right) {
  //         current = current.right;
  //       } else {
  //         return false;
  //       }
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  find(val) {
    let current = this.root;

    if (!current) {
      return false;
    } else {
      while (true) {
        if (val === current.val) {
          return [true, current];
        } else if (val > current.val) {
          if (current.right) {
            current = current.right;
          } else {
            return false;
          }
        } else {
          if (current.left) {
            current = current.left;
          } else {
            return false;
          }
        }
      }
    }
  }
}
const tree = new BinarySearchTree();

//      10
//   5     13
// 2  7  11  16

tree
  .insert(10)
  .insert(5)
  .insert(13)
  .insert(11)
  .insert(2)
  .insert(16)
  .insert(7)
  .insert(3);
console.log(tree);

console.log(tree.find(2));
console.log(tree.find(16));
console.log(tree.find(3));
console.log(tree.find(23));

// Big O:
// best : O(log n)
// avg : O(log n)
// worst : O(n)

//Steele's Solution:
// find(value){
//     if(this.root === null) return false;
//     var current = this.root,
//         found = false;
//     while(current && !found){
//         if(value < current.value){
//             current = current.left;
//         } else if(value > current.value){
//             current = current.right;
//         } else {
//             found = true;
//         }
//     }
//     if(!found) return undefined;
//     return current;
// }
// contains(value){
//     if(this.root === null) return false;
//     var current = this.root,
//         found = false;
//     while(current && !found){
//         if(value < current.value){
//             current = current.left;
//         } else if(value > current.value){
//             current = current.right;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }

