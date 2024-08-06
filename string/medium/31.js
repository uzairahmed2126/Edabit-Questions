// Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// Examples
function transformUpvotes(numbers) {
  let num = numbers.split(" ");
  return num.reduce((acc, cur) => {
    if (!cur.includes("k")) {
      acc.push(+cur);
    } else {
      acc.push(1000 * cur.replace("k", ""));
    }
    return acc;
  }, []);
}
// function transformUpvotes(numbers) {
//   let num = numbers.split(" ");
//   let res = [];
//   for (let i = 0; i < num.length; i++) {
//     if (!num[i].includes("k")) {
//       res.push(+num[i]);
//     } else {
//       let total = 1000 * parseFloat(num[i]);
//       res.push(total);
//     }
//   }
//   return res;
// }
console.log(transformUpvotes("6.8k 13.5k")); //➞ [6800, 13500]
console.log(transformUpvotes("5.5k 8.9k 32")); //➞ [5500, 8900, 32]
console.log(transformUpvotes("20.3k 3.8k 7.7k 992")); //➞ [20300, 3800, 7700, 992]
// Notes
// Return the upvotes as an array.
