// Peeling off the Outer Layers
// Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

// Examples

// const peelLayerOff = (arr) =>{
//     arr.shift()
//     arr.pop()
//     return arr.map(element => {
//         element.shift()
//         element.pop()
//         return element
//     });
// // }
// function peelLayerOff(arr) {
//   let result = [];
//   for (let i = 1; i < arr.length - 1; i++) {
//     let resultInner = [];
//     for (let j = 1; j < arr[i].length - 1; j++) {
//       resultInner.push(arr[i][j]);
//     }
//     result.push(resultInner);
//   }
//   return result;
// }

function peelLayerOff(arr) {
    if(arr[0]&&arr[arr.length-1]) {
        return arr
    }
    // return arr
//   let result = [];
//   for (let i = 1; i < arr.length - 1; i++) {
//     let resultInner = [];
//     for (let j = 1; j < arr[i].length - 1; j++) {
//       resultInner.push(arr[i][j]);
//     }
//     result.push(resultInner);
//   }
//   return result;
}
console.log(
  peelLayerOff([
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h"],
    ["i", "j", "k", "l"],
    ["m", "n", "o", "p"],
  ])
); //➞ [["f", "g"],["j", "k"]]

console.log(
  peelLayerOff([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35],
  ])
); //➞ [[7, 8, 9],[12, 13, 14],[17, 18, 19],[22, 23, 24],[27, 28, 29]]

console.log(
  peelLayerOff([
    [true, false, true],
    [false, false, true],
    [true, true, true],
  ])
); //➞ [[false]]

console.log(
  peelLayerOff([
    ["hello", "world"],
    ["hello", "world"],
  ])
); //➞ []
// pachayti of abdul salam
// function arrayDimension(arr) {
//   //   let row = arr.length;
//   //   let column = arr.length;
//   let row = 0;
//   let column = 0;
//   for (let i = 0; i < arr.length; i++) {
//     row++;
//   }
//   for (let j = 0; j < arr[0].length; j++) {
//     column++;
//   }
//   return `${row}X${column}`;
// }
// console.log(
//   arrayDimension([
//     ["a", "b", "c", "d"],
//     ["e", "f", "g", "h"],
//     ["i", "j", "k", "l"],
//     ["m", "n", "o", "p"],
//   ])
// ); //➞ [["f", "g"],["j", "k"]]

// console.log(
//   arrayDimension([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25],
//     [26, 27, 28, 29, 30],
//     [31, 32, 33, 34, 35],
//   ])
// ); //➞ [[7, 8, 9],[12, 13, 14],[17, 18, 19],[22, 23, 24],[27, 28, 29]]

// console.log(
//   arrayDimension([
//     [true, false, true],
//     [false, false, true],
//     [true, true, true],
//   ])
// ); //➞ [[false]]

// console.log(
//   arrayDimension([
//     ["hello", "world"],
//     ["hello", "world"],
//   ])
// ); //➞ []
// // Notes
// // The 2D grid is always a rectangular/square shape.
// // Always return some form of nested array, unless there are no elements. In that case, return an empty array.
