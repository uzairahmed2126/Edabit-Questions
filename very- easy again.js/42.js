// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Examples
function check(arr, val) {
  let result = false;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === val) {
  //       return true;
  //     }
  //   }
  //   return false;
    arr.forEach((element) => {
      if (element === val) {
        result = true;
      }
    });
    return result;
}
console.log(check([1, 2, 3, 4, 5], 3)); //➞ true
console.log(check([1, 1, 2, 1, 1], 3)); //➞ false
console.log(check([5, 5, 5, 6], 5)); //➞ true
console.log(check([], 5)); //➞ false
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
