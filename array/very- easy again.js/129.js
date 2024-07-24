// Applying Discounts
// Create a function that applies a discount d to every number in the array.

// Examples
function getDiscounts(arr, d) {
  //   let actual = parseInt(d) / 100;
  //   return arr.map((element) => actual * element);
  let result = [];
  let getNumber = +d.split("").slice(0, 2).join("") / 100;
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * getNumber);
  }
  return result;
}
console.log(getDiscounts([2, 4, 6, 11], "50%")); //➞ [1, 2, 3, 5.5]
console.log(getDiscounts([10, 20, 40, 80], "75%")); //➞ [7.5, 15, 30, 60]
console.log(getDiscounts([100], "45%")); //➞ [45]
// Notes
// The discount is the percentage of the original price (i.e the discount of "75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
// There won't be any awkward decimal numbers, only 0.5 to deal with.
