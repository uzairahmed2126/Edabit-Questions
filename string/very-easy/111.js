// Recursion: Reverse a String
// Write a function that reverses a string. Make your function recursive.

// Examples
function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  //   let res = ''
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("hello")); //➞ "olleh"
console.log(reverse("world")); //➞ "dlrow"
console.log(reverse("a")); //➞ "a"
console.log(reverse("")); //➞ ""
// Notes
// For non-base cases, your function must call itself at least once.
// Check the Resources tab for info on recursion.
