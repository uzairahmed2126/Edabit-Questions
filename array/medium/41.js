// Find NaN in an Array
// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

// Examples
function findNaN(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if( isNaN(arr[i])) {
  //         return i
  //     }
  //   }
  //   return -1;
//   return arr.findIndex((item) => isNaN(item));
     let str=  arr.reduce((acc, cur, index) => {
        acc.push(String(cur));
        return acc;
    }, []);
    return str.indexOf("NaN")
}
console.log(findNaN([1, 2, NaN])); //➞ 2
console.log(findNaN([NaN, 1, 2, 3, 4])); //➞ 0
console.log(findNaN([0, 1, 2, 3, 4])); //➞ -1
// Notes
// NaN will occur in the input array only once.
