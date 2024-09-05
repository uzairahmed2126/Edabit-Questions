// Shhh Be Quiet Function
// Write a function that removes all capital letters from a sentence except the first letter, puts quotation marks around the sentence and adds ", whispered Edabit." at the end.

// Examples
function shhh(str) {
  let result = "";
  if (str.length === 0) {
    return `"", whispered Edabit.`;
  }
  result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    result += str[i].toLowerCase();
  }
  return `${result}, whispered Edabit.`;
}
console.log(shhh("HI THERE!")); //➞ '"Hi there!", whispered Edabit.'
console.log(shhh("tHaT'S Pretty awesOme")); //➞ '"That's pretty awesome", whispered Edabit.'
console.log(shhh("")); //➞ '"", whispered Edabit.'
// Notes
// Don't forget to surround the original string with double quotation marks "".
