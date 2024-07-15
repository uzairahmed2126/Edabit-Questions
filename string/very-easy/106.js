// Repeating Letters N Times
// Create a function that repeats each character in a string n times.

// Examples
function repeat(str, n) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(n);
  }
  return result;
}
console.log(repeat("mice", 5)); //➞ "mmmmmiiiiiccccceeeee"
console.log(repeat("hello", 3)); //➞ "hhheeellllllooo"
console.log(repeat("stop", 1)); //➞ "stop"
// Notes
// N/A
