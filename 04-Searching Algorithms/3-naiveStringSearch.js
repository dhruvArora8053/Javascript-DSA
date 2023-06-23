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
console.log("------------------------------");

//Solution 2:-
const naiveStringSearch1 = function (str, pattern) {
  let count = 0;
  while (str.length >= pattern.length) {
    let word = str.slice(0, pattern.length);
    // console.log(word);
    if (word === pattern) {
      count++;
    }
    str = str.slice(1);
  }

  return count;
};

console.log(naiveStringSearch1("womgwomgzomgomg", "omg"));
console.log(naiveStringSearch1("lsdafjdflsakaakaakadfsakadflaka", "aka"));
console.log(naiveStringSearch1("lorie loled", "lol"));
console.log(naiveStringSearch1("lorie loled", "lo"));
console.log(naiveStringSearch1("lorie loled", "pop"));
