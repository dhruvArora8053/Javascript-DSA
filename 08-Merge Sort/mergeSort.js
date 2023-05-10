"use strict";

// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
console.log(mergeSort([2, 1, 9, 76, 4]));
console.log(mergeSort([42, 33, 11]));
console.log(mergeSort([37, 45, 29, 8]));
console.log(mergeSort([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(mergeSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(mergeSort([-8, 1, 2, -3, 4, -5, 6, 7]));
