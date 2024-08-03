// Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// Examples
function transformUpvotes(str) {
  let splited = str.split(" ");
  return splited.map((item) =>
    !item.includes("k") ? item * 1 : item.replace("k", "") * 1000
  );
  //   let result = [];
  //   for (let i = 0; i < splited.length; i++) {
  //     const num = parseFloat(splited[i]);
  //     if (splited[i].includes("k")) {
  //       result.push(num * 1000);
  //     } else {
  //       result.push(num);
  //     }
  //   }
  //   return result;
}
console.log(transformUpvotes("6.8k 13.5k")); //➞ [6800, 13500]
console.log(transformUpvotes("5.5k 8.9k 32")); //➞ [5500, 8900, 32]
console.log(transformUpvotes("20.3k 3.8k 7.7k 992")); //➞ [20300, 3800, 7700, 992]
// Notes
// Return the upvotes as an array.
