// Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Number	Month Name
// 1	January
// 2	February
// 3	March
// 4	April
// 5	May
// 6	June
// 7	July
// 8	August
// 9	September
// 10	October
// 11	November
// 12	December
// Examples
function monthName(num) {
  //   const getMonth = { 3: "March", 6: "June", 12: "December" };
  //   return getMonth[num];
  const date = new Date(0, num - 1);
  return date.toLocaleString("default", { month: "long" });
  //   return date.toLocaleString("default", { month: "long" });
  // let getMonth = new Date();
  // return getMonth.setMonth()
}
console.log(monthName(3)); //➞ "March"
console.log(monthName(12)); //➞ "December"
console.log(monthName(6)); //➞ "June"
console.log(monthName(1)); //➞ "June"
// Notes
// You can expect only integers ranging from 1 to 12 as test input.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
