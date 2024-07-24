// Sandwich Fillings
// Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

// Examples
function getFillings(sandwich) {
  //   let result = [];
  //   sandwich.shift();
  //   sandwich.pop();
  //   for (let i = 0; i < sandwich.length; i++) {
  //     result.push(sandwich[i]);
  //   }
  //   return result;
  //   return sandwich.slice(1, sandwich.length - 1);
  return sandwich.filter((element) => element !== "bread");
}
console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"])); //➞ ["ham", "cheese", "ham"]
console.log(getFillings(["bread", "sausage", "tomato", "bread"])); //➞ ["sausage", "tomato"]
console.log(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"])); //➞ ["lettuce", "bacon", "tomato"]
// Notes
// The first and last elements will always be "bread".
