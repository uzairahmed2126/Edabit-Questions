// Find the Second Occurrence of "zip" in a String
// Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.

// Examples
function findZip(zip) {
  //   let splited = zip.split(" ");
  //   let res = [];
  //   for (let i = 0; i < splited.length; i++) {
  //     if (splited[i].includes("zip")) {
  //       res.push(splited[i]);
  //     }
  //   }
  //   return res.length >= 2 ? zip.lastIndexOf("zip") : -1;
  let firstIndex = zip.indexOf("zip");
  if (firstIndex === -1) {
    return -1;
  }
  let secondIndexOf = zip.indexOf("zip", firstIndex + 1);
  return secondIndexOf;
}
console.log(findZip("all zip files are zipped")); //➞ 18

console.log(findZip("all zip files are compressed")); //➞ -1
// Notes
// Uppercase "Zip" is not the same as lowercase "zip".
