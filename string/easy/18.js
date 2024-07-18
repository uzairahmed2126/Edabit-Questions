// Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
function societyName(arr) {
  //   let str = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     str.push(arr[i][0]);
  //   }
  //   return str.sort().join('');
  const sorted = arr.reduce((acc, cur) => {
    acc.push(cur[0]);
    return acc.sort();
  }, []);
  return sorted.join("");
}
console.log(societyName(["Adam", "Sarah", "Malcolm"])); //➞ "AMS"

console.log(societyName(["Harry", "Newt", "Luna", "Cho"])); //➞ "CHLN"

console.log(
  societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])
); //➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.
