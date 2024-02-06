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

console.log("-------------------------------");

//Solution 3:-
const naiveStringSearch2 = function (str, pattern) {
  let count = 0;
  for (let i = 0; i <= str.length - pattern.length; i++) {
    if (str.slice(i, pattern.length + i) === pattern) {
      count++;
    }
  }
  return count;
};

console.log(naiveStringSearch2("womgwomgzomgomg", "omg"));
console.log(naiveStringSearch2("lsdafjdflsakaakaakadfsakadflaka", "aka"));
console.log(naiveStringSearch2("lorie loled", "lol"));
console.log(naiveStringSearch2("lorie loled", "lo"));
console.log(naiveStringSearch2("lorie loled", "pop"));

console.log("----------------------------");


// My Solution Once Again:-
const naiveStringSearch3 = function (str, pattern) {
  let count = 0;

  for (let i = 0; i <= str.length - pattern.length; i++) {
    str[i] === pattern[0] &&
      str.slice(i, pattern.length + i) === pattern &&
      count++;
  }

  return count;
};

console.log(naiveStringSearch3("womgwomgzomgomg", "omg"));
console.log(naiveStringSearch3("lsdafjdflsakaakaakadfsakadflaka", "aka"));
console.log(naiveStringSearch3("lorie loled", "lol"));
console.log(naiveStringSearch3("lorie loled", "lo"));
console.log(naiveStringSearch3("lorie loled", "pop"));
