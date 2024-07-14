// Shuffle the Name
// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

// Examples
function nameShuffle(str) {
  //   return str.split(" ").reverse().join(" ");
  let storeInArr = [];
  let current = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      storeInArr.push(current);
      current = "";
    } else {
      current += str[i];
    }
  }
  storeInArr.push(current);
  let result = "";
  for (let i = storeInArr.length - 1; i >= 0; i--) {
    result += storeInArr[i] + " ";
  }
  return result;
}
console.log(nameShuffle("Donald Trump")); //➞ "Trump Donald"
console.log(nameShuffle("Rosie O'Donnell")); //➞ "O'Donnell Rosie"
console.log(nameShuffle("Seymour Butts")); //➞ "Butts Seymour"
// Notes
// There will be exactly one space between the first and last name.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
