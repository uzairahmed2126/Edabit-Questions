// Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

// Examples
function capMe(arr) {
  //   let mapped = arr.map(
  //     (item) => item[0].toUpperCase() + item.slice(1, item.length)
  //   );
  //   return mapped;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const firstChar = arr[i][0];
    const word = arr[i];
    result.push(firstChar.toUpperCase() + word.slice(1));
  }
  return result;
}
console.log(capMe(["mavis", "senaida", "letty"])); //➞ ["Mavis", "Senaida", "Letty"]
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])); //➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])); //➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
// Notes
// Don't change the order of the original array.
// Notice in the second example above, "MABELLE" is returned as "Mabelle".
