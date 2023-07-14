"use strict";

//https://leetcode.com/problems/valid-anagram/

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
