// RegEx: Boundary Assertions II
// You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.

// Examples
function accepted(arr) {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i][0] !== "C") {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return arr.filter((element, index) => element[(index = 0)] !== "C");
  return arr.filter((word) => !/^C/.test(word));
}
console.log(accepted(["Ducks", "Bears", "Cats"])); //➞ ["Ducks", "Bears"]

console.log(accepted(["cars", "trucks", "planes"])); //➞ ["cars", trucks", "planes"]

console.log(accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"])); //➞ ["Worms", "Bugs", "Beans"]
// Notes
// Use a RegEx boundary assertion in your function.
