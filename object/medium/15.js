// ES6: Destructuring Objects X
// Given an array of user objects.

let names = [];

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" },
];

// for (let i = 0; i < users.length; i++) {
//   names.push(users[i].name);
// }

for (let { name } of users) {
  names.push(name);
}
console.log(names); // should log ["John", "Jason", "Jeremy", "Jacob"]
// Push the first names of all users in the names array.

// Notes
// You only have to change the "for...of" loop parameters.
// Ignore the const str assignment. This is only used for validation purposes.
// Check the MDN docs to find out more about object destructuring in "for...of" loops (check the Resources tab).
