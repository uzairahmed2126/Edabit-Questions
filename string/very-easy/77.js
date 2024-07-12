// Filter a String
// Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.

// Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.

// Examples
function filterString(str) {
  let uppercase = 0;
  let lowercase = 0;
  let numbers = 0;
  let special = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (/[A-Z]/.test(char)) {
      uppercase++;
    } else if (/[a-z]/.test(char)) {
      lowercase++;
    } else if (/[0-9]/.test(char)) {
      numbers++;
    } else {
      special++;
    }
  }
  return [uppercase, lowercase, numbers, special];
}
console.log(filterString("*$(#Mu12bas43hiR%@*!")); //➞ [2, 6, 4, 8]
// 2 uppercase letters
// 6 lowercase letters
// 4 numbers
// 8 special characters

console.log(filterString("^^Edabit^^%$#12379")); //➞ [1, 5, 5, 7]

console.log(filterString("**Airforce1**")); //➞ [1, 7, 1, 4]
// Notes
// N/A
