// Instant JAZZ
// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// Examples
// function jazzify(arr) {
//   return arr.map((item) => {
//     if (!item.includes("7")) {
//       return item + "7";
//     } else {
//       return item;
//     }
//   });
// }
// function jazzify(arr) {
//   return arr.reduce((acc, cur) => {
//     if (!cur.includes("7")) {
//       acc.push(cur + "7");
//     }else {
//         acc.push(cur)
//     }
//     return acc;
//   }, []);
// }
function jazzify(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes("7")) {
      result.push(arr[i] + "7");
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(jazzify(["G", "F", "C"])); //➞ ["G7", "F7", "C7"]

console.log(jazzify(["Dm", "G", "E", "A"])); //➞ ["Dm7", "G7", "E7", "A7"]

console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

console.log(jazzify([])); //➞ []
// Notes
// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.
