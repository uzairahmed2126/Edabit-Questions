// Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.

// Examples
function spaceMeOut(str) {
  //   let result = "";
  //   for (let i = 0; i < str.length; i++) {
  //     result += str[i] + " ";
  //   }
  //   return result;
  return str.split('').join(' ')
}
console.log(spaceMeOut("space")); //➞ "s p a c e"

console.log(spaceMeOut("far out")); //➞ "f a r   o u t"

console.log(spaceMeOut("elongated musk")); //➞ "e l o n g a t e d   m u s k"
// Notes
// Treat a space as its own character (i.e. leave three spaces between words).
