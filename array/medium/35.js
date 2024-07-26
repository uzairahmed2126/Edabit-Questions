// Number to Reversed Array
// Create a function that takes a number and returns an array with the digits of the number in reverse order.

// Examples
function reverseArr(num) {
  let numbers = String(num).split("");
  return numbers.reduce((acc,cur)=>{
    acc.unshift(+cur)
    return acc
  },[])
//   let result = [];
//   for (let i = numbers.length - 1; i >= 0; i--) {
//     result.push(+numbers[i]);
//   }
//   return result;
}
console.log(reverseArr(1485979)); //➞ [9, 7, 9, 5, 8, 4, 1]

console.log(reverseArr(623478)); //➞ [8, 7, 4, 3, 2, 6]

console.log(reverseArr(12345)); //➞ [5, 4, 3, 2, 1]
// Notes
// N/A
