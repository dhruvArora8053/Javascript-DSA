"use strict";

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
