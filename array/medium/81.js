// Removing Enemies
// Remove enemies from the array of people, even if the enemy shows up twice.

// Examples
// function removeEnemies(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }
//   return result;
// }
// function removeEnemies(arr1, arr2) {
//   return arr1.filter((item) => !arr2.includes(item));
// }
function removeEnemies(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr1.splice(i, 1);
    }
  }
  return arr1;
}
console.log(removeEnemies(["Fred"], [])); //➞ ["Fred"]
console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"])); //➞ ["Adam", "Tanya"]
console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"])); //➞ ["Emily", "Steve"]
// Notes
// All names to be removed will be in the enemies array; simply return the array, no fancy strings.
