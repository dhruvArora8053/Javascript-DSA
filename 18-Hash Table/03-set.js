"use strict";

//simple hash function:
const hash = function (key, arrayLen) {
  let total = 0;
  let wierdPrime = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * wierdPrime + value) % arrayLen;
  }
  return total;
};

console.log(hash("pink", 13));
console.log(hash("pink", 13));
console.log(hash("pink", 13));
console.log(hash("pink", 13));
console.log(hash("cyan", 13));
console.log(hash("green", 13));
console.log(hash("orange", 13));
console.log(hash("purple", 13));
console.log(hash("maroon", 13));
//problems with this func:- only hashes strings
//2. not constant time, as the string grows, loop grows
//3. not much randomness, our data can be clustered very easily
