// Potential Friend?
// Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!

// Examples
// function isPotentialFriend(arr1, arr2) {
//   let length1 = arr1.length;
//   let length2 = arr2.length;
//   let len = length2 > length1 ? length2 : length1;
//   for (let i = 0; i < len; i++) {
//     if (arr1[i] === arr2[i]) {
//       return true;
//     }
//   }
//   return false;
// }
function isPotentialFriend(arr1, arr2) {
  let result = arr1.filter((item, index) => item === arr2[index]);
  return result.length !== 0;
}
console.log(
  isPotentialFriend(
    ["sports", "music", "chess"],
    ["coding", "music", "netflix", "chess"]
  )
); //➞ true

console.log(
  isPotentialFriend(
    ["cycling", "technology", "drawing"],
    ["dancing", "drawing"]
  )
); //➞ false

console.log(isPotentialFriend(["history"], ["history"])); //➞ true
// Notes
// Arrays of interests may have varied lengths.
