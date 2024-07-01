// How Many D's Are There?
// Create a function that counts how many D's are in a sentence.

// Examples
function countDs(str) {
  let countD = 0;
  let lowerCase = str.trim().toLowerCase().split("");
  return lowerCase.reduce((acc, cur) => {
    if (cur.includes("d")) {
      acc++;
    }
    return acc;
  }, 0);

  //   let i = 0;
  //   while (lowerCase.length > i) {
  //     if (lowerCase[i] === "d") {
  //       countD++;
  //     }
  //     i++;
  //   }
  //   return countD;
  //   for (let i = 0; i < str.length; i++) {
  //     if (lowerCase[i] === "d") {
  //       countD++;
  //     }
  //   }
  //   return countD;
}
console.log(countDs("My friend Dylan got distracted in school.")); //➞ 4
console.log(countDs("Debris was scattered all over the yard.")); //➞ 3
console.log(countDs("The rodents hibernated in their den.")); //➞ 3
// Notes
// Your function must be case-insensitive.
// Remember to return the result.
// Check the Resources for help.
