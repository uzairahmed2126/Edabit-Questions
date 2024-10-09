// Potential Friend?
// Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!

// Examples
function isPotentialFriend(arr1, arr2) {
//   return arr1.some((item1, index1) =>
//     arr2.some((item2, index2) => item1 === item2 && index1 === index2)
//   );
    let len = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (let i = 0; i < len; i++) {
      if (arr1[i] === arr2[i]) {
        return true;
      }
    }
    return false;
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
