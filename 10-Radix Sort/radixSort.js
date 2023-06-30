const getDigit = function (num, pos) {
  return +String(Math.abs(num))
    .split("")
    .reverse()
    .slice(pos, pos + 1);
};

// const getDigit = function (num, pos) {
//   return +String(Math.abs(num)).split("").reverse()[pos];
// };

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

console.log(mostDigits([1234, 56, 7]));
console.log(mostDigits([1, 1, 11111, 1]));
console.log(mostDigits([12, 34, 56, 78]));
