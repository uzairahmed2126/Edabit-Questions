// Name Greeting!
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

// Examples
function helloName(name) {
  // return "Hello "+name+'!'
  // return `Hello ${name}!`
  return "Hello ".concat(name).concat("!");
}
console.log(helloName("Gerald")); //➞ "Hello Gerald!"
console.log(helloName("Tiffany")); //➞ "Hello Tiffany!"
console.log(helloName("Ed")); //➞ "Hello Ed!"
// Notes
// The input is always a name (as string).
// Don't forget the exclamation mark!
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
