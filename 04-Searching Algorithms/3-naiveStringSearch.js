"use strict";

//Write a program to find number of string patterns inside a string and return counted patterns:

const naiveStringSearch = function (string, pattern) {
  let count = 0;
  let a = 0;
  let b = 3;

  while (b <= string.length) {
    if (string.slice(a, b) === pattern) {
      count++;
    }
    a++;
    b++;
  }
  return count;
};

console.log(naiveStringSearch("womgwomgzomgomg", "omg"));
console.log(naiveStringSearch("lsdafjdflsakaakaakadfsakadflaka", "aka"));

// console.log('lsdfk'.slice(0,3));
