// Is Sam with Frodo?
// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

// Examples
function middleEarth(arr) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     const current = arr[i].trim().toLowerCase();
  //     const next = arr[i + 1].trim().toLowerCase();
  //     if (
  //       (current === "sam" && next === "frodo") ||
  //       (current === "frodo" && next === "sam")
  //     ) {
  //       return true;
  //     }
  //   }
  //   return false;
}
console.log(middleEarth(["Frodo", "Sam", "Gandalf"])); //➞ true
console.log(middleEarth(["Frodo", "Saruman", "Sam"])); //➞ false
console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"])); //➞ true
// Notes
// No matter who comes first, the result must be true if Frodo and Sam are side by side.
// There is only one Sam and one Frodo in the array.
