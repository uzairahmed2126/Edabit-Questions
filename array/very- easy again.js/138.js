// Even Odd Partition
// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

// [[evens], [odds]];
// Examples
function evenOddPartition(arr) {
  //   let result = [[], []];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       result[0].push(arr[i]);
  //     } else {
  //       result[1].push(arr[i]);
  //     }
  //   }
  //   return result;
  return arr.reduce(
    (acc, cur) => {
      if (cur % 2 === 0) {
        acc[0].push(cur);
      } else {
        acc[1].push(cur);
      }
      return acc;
    },
    [[], []]
  );
}
console.log(evenOddPartition([5, 8, 9, 2, 0])); //➞ [[8, 2, 0], [5, 9]]
console.log(evenOddPartition([1, 0, 1, 0, 1, 0])); //➞ [[0, 0, 0], [1, 1, 1]]
console.log(evenOddPartition([1, 3, 5, 7, 9])); //➞ [[], [1, 3, 5, 7, 9]]
console.log(evenOddPartition([])); //➞ [[], []]
// Notes
// Return two empty subarrays if the input is an empty array.
// Keep the same relative ordering as the original array.
