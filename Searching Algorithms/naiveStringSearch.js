"use strict";

const stringSearch = function (string, subString) {
  let i = 0;
  let j = subString.length;
  let count = 0;

  while (j < string.length) {
    if (string.slice(i, j) === subString) {
      count++;
    }
    i++;
    j++;
  }
  return count;
};

console.log(stringSearch("wowomgzomg", "omg"));

let a = "wowomgzomg";
let b = "omg";

console.log(a.slice(0, 3));

if (a.slice(0, 3) === b) {
  console.log(true);
} else console.log(false);
