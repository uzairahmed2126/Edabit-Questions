// Array Multiplier
// Create a function that takes an array as an argument and returns a new nested array for each element in the original array. The nested array must be filled with the corresponding element (string or number) in the original array and each nested array has the same amount of elements as the original array.

// Examples
// function multiply(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let innerArr = [];
//     for (let j = 0; j < arr.length; j++) {
//       let num = arr[i];
//       innerArr.push(num);
//     }
//     result.push(innerArr);
//   }
//   return result;
// }
function multiply(arr) {
  return arr.reduce((acc, cur) => {
    let str = String(cur);
    let repeat = arr.length;
    let multiply = str.repeat(repeat);
    let splited = multiply.split("");
    let mapped = splited.map((item) => (+item ? +item : item));
    acc.push(mapped);
    return acc;
  }, []);
}
console.log(multiply([4, 5])); //➞ [[4, 4], [5, 5]]
console.log(multiply(["*", "%", "$"])); //➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]
console.log(multiply(["A", "B", "C", "D", "E"])); //➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]
// Notes
// The given array contains numbers or strings.
