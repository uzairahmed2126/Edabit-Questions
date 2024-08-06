// Remove the Special Characters from a String
// Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

// Examples
function removeSpecialCharacters(str) {
  const specialChar = [
    ".",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "\\",
    "*",
    "(",
    ")",
  ];
  let splited = str.split("");
  let res = "";
  for (let i = 0; i < splited.length; i++) {
    if (!specialChar.includes(splited[i])) {
      res += splited[i];
    }
  }
  //   return res;
  return str.replace(/[^a-zA-Z0-9-_ ]/g, "");
}
console.log(removeSpecialCharacters("The quick brown fox!")); //➞ "The quick brown fox"
console.log(removeSpecialCharacters("%fd76$fd(-)6GvKlO.")); //➞ "fd76fd-6GvKlO"
console.log(removeSpecialCharacters("D0n$c sed 0di0 du1")); //➞ "D0nc sed 0di0 du1"
// Notes
// N/A
