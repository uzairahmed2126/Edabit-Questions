// Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

// Examples
function greetPeople(person) {
  //   let res = person.reduce((acc, cur) => {
  //     acc.push("Hello " + cur);
  //     return acc;
  //   }, []);
  //   return res.join(", ");
  let result = [];
  for (let i = 0; i < person.length; i++) {
    result.push("Hello " + person[i]);
  }
  return result.join(', ')
}
console.log(greetPeople(["Joe"])); //➞ "Hello Joe"

console.log(greetPeople(["Angela", "Joe"])); //➞ "Hello Angela, Hello Joe"

console.log(greetPeople(["Frank", "Angela", "Joe"])); //➞ "Hello Frank, Hello Angela, Hello Joe"
// Notes
// Each greeting has to be separated with a comma and a space.
// If you're given an empty array [], return an empty string "".
