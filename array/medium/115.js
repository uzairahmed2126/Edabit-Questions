// Making a Sandwich
// Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.

// Examples
function makeSandwich(ingredients, flavour) {
  //   let sandwich = [];
  //   let len = ingredients.length;
  //   for (let i = 0; i < len; i++) {
  //     let ingredient = ingredients[i];
  //     if (ingredient.indexOf(flavour) !== -1) {
  //       sandwich.push("bread");
  //     }
  //     sandwich.push(ingredient);
  //   }
  //   return sandwich.reduce((acc, cur) => {
  //     acc.push(cur);
  //     if (cur === flavour) {
  //       acc.push("bread");
  //     }
  //     return acc;
  //   }, []);

  let result = [];
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] === flavour) {
      result.push("bread",flavour,'bread');
    }else {
        result.push(ingredients[i]);
    }
  }
  return result;
}
console.log(makeSandwich(["tuna", "ham", "tomato"], "ham")); //➞ ["tuna", "bread", "ham", "bread", "tomato"]
console.log(makeSandwich(["cheese", "lettuce"], "cheese")); //➞ ["bread", "cheese", "bread", "lettuce"]
console.log(makeSandwich(["ham", "ham"], "ham")); //➞ ["bread", "ham", "bread", "bread", "ham", "bread"]
// Notes
// You will always get valid inputs.
// Make two separate sandwiches if two of the same elements are next to each other (see example #3).
