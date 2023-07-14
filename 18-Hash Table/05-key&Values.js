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

  //   get(key) {
  //     let index = this._hash(key);
  //     const pair = this.keyMap[index].filter((pair) => {
  //       pair[0] === key;
  //       return pair[1];
  //     });

  //     if (pair) {
  //       return pair;
  //     }
  //     return null;
  //   }

  //steele's solution
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        keys.push(this.keyMap[i][j][0]);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        //checking for unique values
        if (!values.includes(this.keyMap[i][j][1])) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

let ht = new HashTable();
console.log(ht.set("hello world", "goodbye!!"));
console.log(ht.set("dogs", "are cool"));
console.log(ht.set("cats", "are fine"));
console.log(ht.set("i love", "pizza"));
console.log(ht.set("hi", "bye"));
console.log(ht.set("french", "fries"));
console.log(ht.set("german", "fries"));
console.log(ht.set("india", "fries"));
console.log(ht);

console.log(ht.keys());
console.log(ht.values());
