// Let's Sort This Array!
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.
// Examples
function ascDesNone(arr, modification) {
  switch (modification) {
    case "Asc":
      return arr.sort((a, b) => a - b);
    case "Des":
      return arr.sort((a, b) => b - a);
  }
  return arr;
}
console.log(ascDesNone([4, 3, 2, 1], "Asc")); //➞ [1, 2, 3, 4]

console.log(ascDesNone([7, 8, 11, 66], "Des")); //➞ [66, 11, 8, 7]

console.log(ascDesNone([1, 2, 3, 4], "None")); //➞ [1, 2, 3, 4]
// Notes
// N/A
