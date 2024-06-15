// Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

// Examples
function greetPeople(arr) {
  //   let result = "";
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i === arr.length - 1) {
  //       result += `Hello ${arr[i]}`;
  //     } else {
  //       result += `Hello ${arr[i]}, `;
  //     }
  //   }
  //   return result;
  if (arr.length === 0) {
    return "";
  }
  return arr.map((item) => `Hello ${item}`).join(", ");
}
console.log(greetPeople(["Joe"])); //➞ "Hello Joe"
console.log(greetPeople(["Angela", "Joe"])); //➞ "Hello Angela, Hello Joe"
console.log(greetPeople(["Frank", "Angela", "Joe"])); //➞ "Hello Frank, Hello Angela, Hello Joe"
console.log(greetPeople([])); //➞ "Hello Frank, Hello Angela, Hello Joe"
// Notes
// Each greeting has to be separated with a comma and a space.
// If you're given an empty array [], return an empty string "".
