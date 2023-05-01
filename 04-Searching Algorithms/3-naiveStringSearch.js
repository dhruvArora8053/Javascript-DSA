"use strict";

//Write a program to find number of string patterns inside a string and return counted patterns:

const naiveStringSearch = function (str, pattern) {
  let count = 0;
  let a = 0;
  let b = pattern.length;

  while (b <= str.length) {
    if (str.slice(a, b) === pattern) {
      count++;
    }
    a++;
    b++;
  }
  return count;
};

console.log(naiveStringSearch("womgwomgzomgomg", "omg"));
console.log(naiveStringSearch("lsdafjdflsakaakaakadfsakadflaka", "aka"));
console.log(naiveStringSearch("lorie loled", "lol"));
console.log(naiveStringSearch("lorie loled", "lo"));
console.log(naiveStringSearch("lorie loled", "pop"));

// console.log('lsdfk'.slice(0,3));

