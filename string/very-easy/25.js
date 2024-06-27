// Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// Examples
function isPlural(str) {
  // return str[str.length-1] ==="s"
  return str.lastIndexOf("s") !== -1 ? true : false;
}
console.log(isPlural("changes")); //➞ true
console.log(isPlural("change")); //➞ false
console.log(isPlural("dudes")); //➞ true
console.log(isPlural("magic")); //➞ false
// Notes
// Don't forget to return the result.
// Remember that return true (boolean) is not the same as return "true" (string).
// This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
