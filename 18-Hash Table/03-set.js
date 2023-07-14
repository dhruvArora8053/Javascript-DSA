"use strict";

//simple hash function:
class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }
}

let ht = new HashTable();
console.log(ht.set("hello world", "goodbye!!"));
console.log(ht.set("dogs", "are cool"));
console.log(ht.set("cats", "are fine"));
console.log(ht.set("i love", "pizza"));
console.log(ht.set("hi", "bye"));
console.log(ht.set("french", "fries"));
console.log(ht);
 