"use strict";

// class HashTable {
//   constructor(size = 53) {
//     this.keyMap = new Array(size);
//   }

//   _hash(key) {
//     let total = 0;
//     let weird_prime = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       let char = key[i];
//       let value = char.charCodeAt(0) - 96;
//       total = (total * weird_prime + value) % this.keyMap.length;
//     }
//     return total;
//   }

//   set(key, value) {
//     let index = this._hash(key);
//     return index;
//   }
// }

// let ht = new HashTable();
// console.log(ht.set("hello world", "goodbye!!"));

//simple hash function:
const hash = function (key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
};

console.log(hash("pink", 10));
console.log(hash("pink", 10));
console.log(hash("pink", 10));
console.log(hash("pink", 10));
console.log(hash("cyan", 10));
console.log(hash("green", 10));
console.log(hash("orange", 10));
console.log(hash("purple", 10));
console.log(hash("maroon", 10));
//problems with this func:- only hashes strings
//2. not constant time, as the string grows, loop grows
//3. not much randomness, our data can be clustered very easily

