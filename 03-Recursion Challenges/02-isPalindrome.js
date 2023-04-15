"use strict";

const palindrome = function (str) {
  if (str.length === 1) {
    return -1;
  }

  const con = str.toLowerCase().split("");
  const secondPart = con.splice(Math.floor(con.length / 2, con.length - 1));

  let com;
  if (str.length % 2 !== 0) {
    com = con.concat(secondPart.slice(0, 1));

    if (com.join("") === secondPart.reverse().join("")) {
      console.log("it is a palindrome");
    }
  } else if (str.length % 2 === 0) {
    if (con.join("") === secondPart.reverse().join("")) {
      console.log("it is a palindrome");
    } else {
      console.log("it is not a palindrome");
    }
  }
};

palindrome("arora");
palindrome("pullup");
palindrome("Repaper");
palindrome("asdfljld");
console.log(palindrome("1"));
palindrome("ll");
palindrome("lb");
palindrome("oro");
