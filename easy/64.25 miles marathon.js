// 25-Mile Marathon
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.

// Examples
function marathonDistance(arr) {
  if (!arr || arr.length === 0) return false;
  let totalDistance = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     totalDistance += Math.abs(arr[i]);
  //   }
  //   return totalDistance >= 25 ? true : false;
  //   arr.every((distance) => (totalDistance += Math.abs(distance)));
  //   return totalDistance >= 25;
  //   return arr.reduce((acc, cur) => acc + Math.abs(cur), 0) >= 25;
//   arr.map((item) => (totalDistance += Math.abs(item)));
//   return totalDistance >= 25;
}
console.log(marathonDistance([1, 2, 3, 4])); //➞ false
console.log(marathonDistance([1, 9, 5, 8, 2])); //➞ true
console.log(marathonDistance([-6, 15, 4])); //➞ true
// Notes
// Items in the array will always be integers.
// Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert negative integers into positive integers.
// Return false if the arguments are empty or not provided.