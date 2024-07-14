// Is the String in Order?
// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

// Examples
function isInOrder(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "") {
      return true;
    } else {
      arr.push(str[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  let result = "";
  let i = 0;
  while (i < arr.length) {
    result += arr[i];
    i++;
  }
  return result === str;
  //   return str.split("").sort().join("") === str;
}
console.log(isInOrder("abc")); //➞ true
console.log(isInOrder("edabit")); //➞ false
console.log(isInOrder("123")); //➞ true
console.log(isInOrder("xyzz")); //➞ true
// Notes
// You don't have to handle empty strings.
