// Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples
function totalAmountAdjectives(obj) {
  let count = 0;
  for (const key in obj) {
    count++;
  }
  return count;

  // return Object.keys(obj).length;
}
console.log(totalAmountAdjectives({ a: "moron" })); //➞ 1
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })); //➞ 3
console.log(
  totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })
); //➞ 4
// Notes
// The list will never be empty (no empty object).
