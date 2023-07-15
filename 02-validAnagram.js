"use strict";

//https://leetcode.com/problems/valid-anagram/

//My Solution
const validAnagram = function (s, t) {
  const sArr = s.split("");
  const tArr = t.split("");

  if (sArr.length !== tArr.length) return false;

  for (let i = 0; i < tArr.length; i++) {
    if (sArr.includes(tArr[i])) {
      const idx = sArr.findIndex((word) => word === tArr[i]);
      sArr.splice(idx, 1);
    } else return false;
  }
  return true;
};

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("aacc", "ccac"));
console.log("****************************");

//2nd Solution:
const validAnagram1 = function (s, t) {
  const sArr = s.split("");
  const tArr = t.split("");
  const sChars = [];
  const tChars = [];
  let sTotal = 0;
  let tTotal = 0;

  if (sArr.length !== tArr.length) return false;

  for (let i = 0; i < sArr.length; i++) {
    sTotal += sArr[i].charCodeAt();
  }
  for (let i = 0; i < tArr.length; i++) {
    tTotal += tArr[i].charCodeAt();
  }

  if (sTotal === tTotal) return true;
  else return false;
};

console.log(validAnagram1("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("aacc", "ccac"));
