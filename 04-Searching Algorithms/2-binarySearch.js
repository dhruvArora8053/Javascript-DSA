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

//Big O:-
//binary search
// best case: O(1)
// mid or worst case: O(log n)

// log to the base 2 = how many times can we divide a number by 2 so that it gets <=1
//ex: log2(12) = 3.58

//ex: input- [12, 34, 56, 68, 90, 91, 94, 96, 100]
// log2(9) - 3.16
//first round- [91, 94, 96, 100] --> 1
//second round- [96, 100] --> 2
//third round- [100] -- 3
//fourth round- not possible

//ex: input- [12, 34, 56, 68, 90, 91, 94, 96, 100 56, 68, 90, 91, 94, 96, 100]
// log2(16) - 4.0      //   2**4 = 16
//first round- [100, 56, 68, 90, 91, 94, 96, 100] --> 1
//second round- [91, 94, 96, 100] --> 2
//third round- [96, 100] --> 3
//fourth round- [100] --> 4
//fifth round- not possible

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
