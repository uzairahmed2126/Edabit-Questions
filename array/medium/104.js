// Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

// Examples
function mostExpensiveItem(obj) {
  let values = Object.values(obj);
  let keys = Object.keys(obj);
  let index = values.indexOf(Math.max(...values));
  return keys[index];
}
console.log(
  mostExpensiveItem({
    piano: 2000,
  })
); //➞ "piano"

console.log(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
  })
); //➞ "tv"

console.log(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
); //➞ "stereo"
// Notes
// There will only be one most valuable item (no ties).
// The object will always contain at least one item (no empty objects).
