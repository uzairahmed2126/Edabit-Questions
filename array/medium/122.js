// Making a Sandwich
// Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.

// Examples
function makeSandwich(ing, f) {
  let sandwich = [];
  for (let i = 0; i < ing.length; i++) {
    let char = ing[i];
    if (char === f) {
      sandwich.push("bread", f, "bread");
    } else {
      sandwich.push(char);
    }
  }
  return sandwich;
}
console.log(makeSandwich(["tuna", "ham", "tomato"], "ham")); //➞ ["tuna", "bread", "ham", "bread", "tomato"]
console.log(makeSandwich(["cheese", "lettuce"], "cheese")); //➞ ["bread", "cheese", "bread", "lettuce"]
console.log(makeSandwich(["ham", "ham"], "ham")); //➞ ["bread", "ham", "bread", "bread", "ham", "bread"]
// Notes
// You will always get valid inputs.
// Make two separate sandwiches if two of the same elements are next to each other (see example #3).
