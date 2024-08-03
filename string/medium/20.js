// Remove the Letters ABC
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

// Examples
function removeABC(str) {
  let splited = str.split("");
  let res = "";
  for (let i = 0; i < splited.length; i++) {
    if (
      splited[i].toLowerCase() !== "a" &&
      splited[i].toLowerCase() !== "b" &&
      splited[i].toLowerCase() !== "c"
    ) {
      res += splited[i];
    }
  }
  return res === str ? null : res;
}
console.log(removeABC("This might be a bit hard")); //➞ "This might e  it hrd"

console.log(removeABC("hello world!")); //➞ null

console.log(removeABC("")); //➞ null
// Notes
// If the given string does not contain "a", "b", or "c", return null.
