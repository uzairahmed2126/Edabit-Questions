// State Names and Abbreviations
// Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations abb
// Full names full
// Examples
function filterStateNames(arr, names) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (names === "abb" && arr[i].length === 2) {
  //       result.push(arr[i]);
  //     } else if (names === "full" && arr[i].length !== 2) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  //   return arr.filter((element) => {
  //     if (names === "abb" && element.length === 2) {
  //       return element;
  //     } else if (names === "full" && element.length !== 2) {
  //       return element;
  //     }
  //   });
  return arr.reduce((acc, cur) => {
    if (names === "abb" && cur.length === 2) {
      acc.push(cur);
    } else if (names === "full" && cur.length !== 2) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));
//➞ ["CA", "NY"]
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"));
//➞ ["Arizona", "Nevada"]
console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb"));
//➞ ["MT", "NJ", "TX", "ID", "IL"]
console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full"));
//➞ []
// Notes
// State abbreviations will always be in uppercase.
