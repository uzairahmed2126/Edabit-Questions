// Similar Bread
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples
function hasSameBread(arr1, arr2) {
  //   const firstValueOfFirstArray = arr1.shift();
  //   const lastValueOfFirstArray = arr1.pop();
  //   const lastValueOfSecondArray = arr2.pop();
  //   const firstValueOfSecondArray = arr2.shift();
  //   return (
  //     firstValueOfFirstArray === firstValueOfSecondArray &&
  //     lastValueOfFirstArray === lastValueOfSecondArray
  //   );
  return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1];
}
console.log(
  hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
  )
); //➞ true

console.log(
  hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
  )
); //➞ false

console.log(
  hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"])
); //➞ false
// Notes
// The arrays will always be three elements long.
// The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.
