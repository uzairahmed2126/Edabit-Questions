// The Reverser!
// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

// Examples
function reverse(str) {
  let char = str.split("");
  let result = [];
  for (let i = 0; i < char.length; i++) {
    if (char[i].charCodeAt() >= 97 && char[i].charCodeAt() <= 122) {
      result.push(char[i].toUpperCase());
    } else {
      result.push(char[i].toLowerCase());
    }
  }
  return result.reverse().join("");
}
console.log(reverse("Hello World")); //➞ "DLROw OLLEh"
console.log(reverse("ReVeRsE")); //➞ "eSrEvEr"
console.log(reverse("Radar")); //➞ "RADAr"
// Notes
// There will be no punctuation in any of the test cases.
