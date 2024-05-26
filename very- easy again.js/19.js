// Buggy Code (Part 7)
// Mubashir wants to swap two given numbers!

// It is not returning the right values. Can you help him fix it?

// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
// Examples
function swap(...numbers) {
  return [numbers[0], numbers[1]] = [numbers[1], numbers[0]];
}
console.log(swap(100, 200)); //➞ [200, 100]
console.log(swap(44, 33)); //➞ [33, 44]
console.log(swap(21, 12)); //➞ [12, 21]
// Notes
// N/A
