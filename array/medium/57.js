// Chocolate Dilemma
// Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].

// Write a function that returns true if the total area of chocolate is the same for each sister.

// To illustrate:

// console.log(
//   testFairness(
//     [
//       [4, 3],
//       [2, 4],
//       [1, 2],
//     ],
//     [
//       [6, 2],
//       [4, 2],
//       [1, 1],
//       [1, 1],
//     ]
//   )
// );
//➞ true

// Agatha's pieces: [4, 3], [2, 4], [1, 2]
// Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]

// Total area of Agatha's chocolate
// 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22

// Total area of Bertha's chocolate is:
// 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22
// Examples
function testFairness(arr1, arr2) {
  //   let Agatha = 0;
  //   let Bertha = 0;
  //   for (let i = 0; i < arr1.length; i++) {
  //     let [l1, w1] = arr1[i];
  //     Agatha += l1 * w1;
  //   }
  //   for (let i = 0; i < arr2.length; i++) {
  //     let [l2, w2] = arr2[i];
  //     Bertha += l2 * w2;
  //   }
  //   return Agatha === Bertha;
}
//function testFairness() {
//   let Agatha = arr1.reduce((acc, cur) => {
//     let [l, w] = cur;
//     acc += l * w;
//     return acc;
//   }, 0);
//   let Bertha = arr2.reduce((acc, cur) => {
//     let [l, w] = cur;
//     acc += l * w;
//     return acc;
//   }, 0);
//   return Agatha === Bertha;
//}
function testFairness(arr1, arr2) {
  const calculateTotalArea = (pieces) => {
    return pieces.map(([l, w]) => l * w).reduce((sum, area) => sum + area, 0);
  };
  return calculateTotalArea(arr1) === calculateTotalArea(arr2);
}

console.log(
  testFairness(
    [
      [1, 2],
      [2, 1],
    ],
    [[2, 2]]
  )
); //➞ true

console.log(
  testFairness(
    [
      [1, 2],
      [2, 1],
    ],
    [
      [2, 2],
      [4, 4],
    ]
  )
); //➞ false

console.log(
  testFairness(
    [
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2],
    ],
    [[4, 4]]
  )
); //➞ true

console.log(
  testFairness(
    [
      [1, 5],
      [6, 3],
      [1, 1],
    ],
    [
      [7, 1],
      [2, 2],
      [1, 1],
    ]
  )
); //➞ false
// Notes
// N/A
