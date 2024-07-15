// The Full Length of a Google
// Google's logo can be stretched depending on how many pages it lets you skip forward to.

// Image of Goooooooooogle

// Let's say we wanted to change the number of pages that Google could skip to. Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.

// Examples
function googlify(n) {
  let google = "G";
  if (n <= 0) {
    return "invalid";
  }
  //   for (let i = 0; i < n; i++) {
  //     google += "o";
  //   }
  let repeat = "o";
  //   return google.concat("gle");
  return google + repeat.repeat(n).concat("gle");
}
console.log(googlify(10)); //➞ "Goooooooooogle"
console.log(googlify(23)); //➞ "Gooooooooooooooooooooooogle"
console.log(googlify(2)); //➞ "Google"
console.log(googlify(-2)); //➞ "invalid"
// Notes
// If n is equal to or less than 1, return invalid.
