// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
function getFirstValue(arr) {
  let newArr = [];
  //   return arr[0];
  //   arr.map((element, index, arr) => {
  //     if (index === 0) {
  //       newArr.push(element);
  //     }
  //   });
  //   return +newArr;
  return +arr.filter((element, index) => {
    if (index === 0) {
      return element;
    }
  });
}
console.log(getFirstValue([1, 2, 3])); //➞ 1
console.log(getFirstValue([80, 5, 100])); //➞ 80
console.log(getFirstValue([-500, 0, 50])); //➞ -500
// Notes
// The first element in an array always has an index of 0.
