"use strict";
//https://leetcode.com/problems/product-of-array-except-self/

const productArray = function (nums) {
  let productArr = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else {
        product = product * nums[j];
      }
    }
    productArr.push(product);
  }
  return productArr;
};

console.log(productArray([1, 2, 3, 4]));
console.log(productArray([-1, 1, 0, -3, 3]));

//Big O --> O(n**2)
