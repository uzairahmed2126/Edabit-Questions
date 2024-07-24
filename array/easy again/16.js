// Phone Number Formatting
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// Examples
function formatPhoneNumber(arr) {
  if (arr.length !== 10) {
    throw new Error("Input array must contain exactly 10 numbers");
  }
  let string = arr.join("");
  return (
    `(${string.slice(0, 3)}) ` +
    `${string.slice(3, 6)}-${string.slice(6, string.length)}`
  );
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //➞ "(123) 456-7890"
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); //➞ "(519) 555-4468"
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); //➞ "(345) 501-2527"
// Notes
// Don't forget the space after the closing parenthesis.
