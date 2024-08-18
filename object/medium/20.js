// Check If objOne Is Equal to objTwo
// Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

// Example #1
// The first object parameter.
function obj(objOne, objTwo) {
  //   return JSON.stringify(obj1) === JSON.stringify(obj2);
  const keys1 = Object.keys(objOne);
  const keys2 = Object.keys(objTwo);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    let key = keys1[i];
    if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
}
console.log(
  obj(
    { name: "Benny", phone: "3325558745", email: "benny@edabit.com" },
    { name: "Jason", phone: "9853759720", email: "jason@edabit.com" }
  )
);
//➞ false
// Example #2
// The first object parameter.

console.log(
  obj(
    { name: "Jason", phone: "9853759720", email: "jason@edabit.com" }, // The second object parameter.
    { name: "Jason", phone: "9853759720", email: "jason@edabit.com" }
  )
);
//➞ true
// Notes
// If you have a suggestion on how to make these instructions easier to understand, please leave a comment. Your feedback is greatly appreciated.
