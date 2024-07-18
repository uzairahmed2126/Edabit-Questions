// Capitalize by ASCII
// Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

// Examples
function asciiCapitalize(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) % 2 === 0) {
      res += str[i].toUpperCase();
    } else {
      res += str[i].toLowerCase();
    }
  }
  return res;
}
console.log(asciiCapitalize("to be or not to be!")); //➞ "To Be oR NoT To Be!"

console.log(asciiCapitalize("THE LITTLE MERMAID")); //➞ "THe LiTTLe meRmaiD"

console.log(asciiCapitalize("Oh what a beautiful morning.")); //➞ "oH wHaT a BeauTiFuL moRNiNg."
// Notes
// N/A
