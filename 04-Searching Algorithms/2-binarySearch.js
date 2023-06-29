"use stirct";

//Return the index of a number using binary search:
const binarySearch = function (arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([12, 34, 56, 68, 90, 91, 94, 96, 100], 68));

//points:-
// while(start<=end)
//a. if element is greater than arr[mid] than start will go above than mid
//b. start cannot go far than end because end is really the end of array
//c. and if start is trying to go beyond end which means the element is greater and it is not in the array
//d. same for the end

const binarySearch1 = function (arr, item) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] < item) {
      start = mid + start;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([12, 34, 56, 68, 90, 91, 94, 96, 100], 100));
