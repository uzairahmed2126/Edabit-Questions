// Convert Number to String of Dashes
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

// Examples
function Go(number) {
  //   return "-".repeat(number);
  let str = "";
  for (let i = 0; i < number; i++) {
    str += "-";
  }
  return str;
}
console.log(Go(1)); //➞ "-"
console.log(Go(5)); //➞ "-----"
console.log(Go(3)); //➞ "---"
// Notes
// You will be provided integers ranging from 1 to 60.
// Don't forget to return your result as a string.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
