// Return Only the Integer
// Write a function that takes an array of elements and returns only the integers.

// Examples
function returnOnlyInteger(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] === "number") {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  //   return arr.filter((item) => typeof item === "number");
  return arr.reduce((acc, cur) => {
    // if (typeof cur === "number") {
    //   acc.push(cur);
    // }
    if (Number.isInteger(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16])); //➞ [9, 2, 16]
console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"])); //➞ [81, 123]
console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"])); //➞ [10, 56, 20, 3]
console.log(returnOnlyInteger(["String", true, 3.3, 1])); //➞ [1]
// Notes
// N/A
