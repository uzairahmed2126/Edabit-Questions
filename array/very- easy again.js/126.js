// Additive Inverse
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

// Examples
function additiveInverse(arr) {
  let result = [];
  let i = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(-arr[i]);
  //   }
  //   return result;
  //   while (i < arr.length) {
  //     result.push(-arr[i]);
  //     i++;
  //   }
  //   return result;
  //   return arr.reduce((acc, num) => {
  //     acc.push(-num);
  //     return acc;
  //   }, []);
  return arr.map((element) => -element);
}
console.log(additiveInverse([5, -7, 8, 3])); //➞ [-5, 7, -8, -3]
console.log(additiveInverse([1, 1, 1, 1, 1])); //➞ [-1, -1, -1, -1, -1]
console.log(additiveInverse([-5, -25, 35])); //➞ [5, 25, -35]
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
