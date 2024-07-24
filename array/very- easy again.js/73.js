// Chinese Zodiac
// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

// Examples
function chineseZodiac(years) {
  let obj = { 2021: "Ox", 2020: "Rat", 1933: "Rooster" };
  return obj[years];
}
console.log(chineseZodiac(2021)); //➞ "Ox"
console.log(chineseZodiac(2020)); //➞ "Rat"
console.log(chineseZodiac(1933)); //➞ "Rooster"
// Notes
// The list of animals used can vary slightly, so check the Resources tab for the list that you will need for this challenge.
