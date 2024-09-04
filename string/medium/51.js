// String Slice-athon
// This challenge has five miniature exercises to help practice proficiency in string slicing. Check the examples below for a visual indicator of how to slice the strings. Good luck!

// Examples
const s = "abcdefghijklmnopqrstuvwxyz";
function challenge1() {
  return s.slice(0, 5);
}
console.log(challenge1(s)); //➞ "abcde"
function challenge2() {
  return s.slice(s.length - 5, s.length);
}
// First 5 characters of the string.
console.log(challenge2(s)); //➞ "vwxyz"
// Last 5 characters of the string.
function challenge3() {
  return s.split("").reverse().join("");
}
console.log(challenge3(s)); //➞ "zyxwvutsrqponmlkjihgfedcba"
// All characters in the string from back.
function challenge4() {
  let result = "";
  if (s.includes("f")) {
    for (let i = s.length - 21; i >= 0; i--) {
      result += s[i];
    }
  }
  return result;
}
console.log(challenge4(s)); //➞ "fedcba"
// First 6 characters in the string (start with 6th character and go backwards).
function challenge5() {
  let result = "";
  let str = s.slice(-7);
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i];
    }
  }
  return result;
}
console.log(challenge5(s)); //➞ "tvxz"
// Take last 7 characters and only return odd positioned ones.
// Notes
// Check the Tests tab for more examples.
// See the Resources tab for further information on learning string slicing.
// You may use methods other than slice() as needed to complete some of the challenges.
// All test cases follow the same slicing pattern as the above example.
