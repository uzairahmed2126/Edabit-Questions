// Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta
// Examples
function skipTooMuchSugarDrinks(arr) {
  let result = [];
  let compareDrinks = ["cola", "fanta"];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!arr.includes(compareDrinks[i])) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  arr.forEach((element) => {
    if (!compareDrinks.includes(element)) {
      result.push(element);
    }
  });
  return result;
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"])); // ["water"]
console.log(skipTooMuchSugarDrinks(["fanta", "cola"])); // []
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"])); // ["lemonade", "beer", "water"]
// Notes
// The function returns an array of strings.
// All drink names are in lowercase.
