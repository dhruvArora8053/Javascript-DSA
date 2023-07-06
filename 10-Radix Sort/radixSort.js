const getDigit = function (num, pos) {
  return +String(Math.abs(num))
    .split("")
    .reverse()
    .slice(pos, pos + 1);
};

// const getDigit = function (num, pos) {
//   return +String(Math.abs(num)).split("").reverse()[pos];
// };

// function getDigit(num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

console.log(getDigit(-12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5));
console.log("-----------------------------");
console.log(getDigit(7323, 0));
console.log(getDigit(7323, 1));
console.log(getDigit(7323, 2));
console.log(getDigit(7323, 3));
console.log("-----------------------------");

const digitCount = function (num) {
  return String(Math.abs(num)).split("").length;
};

// function digitCount(num) {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

console.log(digitCount(1));
console.log(digitCount(25));
console.log(digitCount(314));
console.log("--------------------------");

const mostDigits = function (arr) {
  let max = digitCount(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (max < digitCount(arr[i])) {
      max = digitCount(arr[i]);
    }
  }
  return max;
};

// function mostDigits(nums) {
//   let maxDigits = 0;
//   for (let i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//   }
//   return maxDigits;
// }

console.log(mostDigits([1234, 56, 7]));
console.log(mostDigits([1, 1, 11111, 1]));
console.log(mostDigits([12, 34, 56, 78]));
console.log("----------------------------");

const radixSort = function (arr) {
  let maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      // let digit = getDigit(arr[i], k);
      // digitBuckets[digit].push(arr[i]);
      digitBuckets[getDigit(arr[i], k)].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

console.log(radixSort([2, 1, 9, 76, 4]));
console.log(radixSort([42, 33, 11]));
console.log(radixSort([37, 45, 29, 8]));
console.log(radixSort([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(radixSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(radixSort([-8, 1, 2, -3, 4, -5, 6, 7]));
console.log(radixSort([23, 345, 5476, 12, 2345, 9852]));
console.log(radixSort([-23, -333, -400, 12, 1, 2, 3, 44, -233]));

//Big O:-
//Worst --> O(nk)
//Avg   --> O(nk)
//Best  --> O(nk)

//Note:- isn't working for negative values in the array

console.log("----------------------------------");

// My Solution:-

const digitAt = function (num, index) {
  return +String(Math.abs(num))
    .split("")
    .reverse()
    .slice(index, index + 1)
    .join();
};

console.log(digitAt(-12345, 0));
console.log(digitAt(12345, 1));
console.log(digitAt(12345, 2));
console.log(digitAt(12345, 3));
console.log(digitAt(12345, 4));
console.log(digitAt(12345, 5));
console.log(digitAt(12345, 6));
console.log("-----------------------------");
console.log(digitAt(7323, 0));
console.log(digitAt(7323, 1));
console.log(digitAt(7323, 2));
console.log(digitAt(7323, 3));
console.log("-----------------------------");

const digitCount1 = function (num) {
  return String(Math.abs(num)).split("").length;
};

console.log(digitCount1(1));
console.log(digitCount1(25));
console.log(digitCount1(314));
console.log("--------------------------");

const maxDigitCount1 = function (arr) {
  let max = digitCount1(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (max < digitCount1(arr[i])) {
      max = digitCount1(arr[i]);
    }
  }
  return max;
};

console.log(maxDigitCount1([1234, 56, 7]));
console.log(maxDigitCount1([1, 1, 11111, 1]));
console.log(maxDigitCount1([12, 34, 56, 78]));
console.log("----------------------------");

const radixSort1 = function (arr) {
  const maxDigits = maxDigitCount1(arr);

  for (let k = 0; k < maxDigits; k++) {
    let container = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      container[digitAt(arr[i], k)].push(arr[i]);
    }
    arr = [].concat(...container);
  }
  return arr;
};

console.log(radixSort1([2, 1, 9, 76, 4]));
console.log(radixSort1([42, 33, 11]));
console.log(radixSort1([37, 45, 29, 8]));
console.log(radixSort1([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(radixSort1([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(radixSort1([-8, 1, 2, -3, 4, -5, 6, 7]));
console.log(radixSort1([23, 345, 5476, 12, 2345, 9852]));
console.log(radixSort1([-23, -333, -400, 12, 1, 2, 3, 44, -233]));
