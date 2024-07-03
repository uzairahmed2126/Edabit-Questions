// Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!

// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
function removeNumbers(str) {
  let split = str.split("");
  //   return split.filter((item) => isNaN(item)).join('');
  //   let result = [];
  //   for (let i = 0; i < split.length; i++) {
  //     if (isNaN(split[i])) {
  //       result.push(split[i]);
  //     }
  //   }
  //   return result.join("");
  return split
    .reduce((acc, cur) => {
      if (isNaN(cur)) {
        acc.push(cur);
      }
      return acc;
    }, [])
    .join("");
}
console.log(removeNumbers("mubashir1")); //➞ "mubashir"
console.log(removeNumbers("12ma23tt")); //➞ "matt"
console.log(removeNumbers("e1d2a3b4i5t6")); //➞ "edabit"
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.
