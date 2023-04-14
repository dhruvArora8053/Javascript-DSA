"use stirct";

//Return the index of a number using binary search:
// const binarySearch = function (arr, val) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] === val) {
//       return mid;
//     } else if (arr[mid] < val) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return -1;
// };

// console.log(binarySearch([12, 34, 56, 68, 90, 91, 94, 96, 100], 68));

const binarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      end = end - 1;
    } else start = start + 1;
  }

  return -1;
};

console.log(binarySearch([12, 34, 56, 68, 90, 91, 94, 96, 100], 100));
