// Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
// Examples
function evenOrOdd(str) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      even += +str[i];
    } else {
      odd += +str[i];
    }
  }
  if (odd >= even) {
    return "Even and Odd are the same";
  }
  return "Even is greater than Odd";
}
console.log(evenOrOdd("22471")); //➞ "Even and Odd are the same"
console.log(evenOrOdd("213613")); //➞ "Even and Odd are the same"
console.log(evenOrOdd("23456")); //➞ "Even is greater than Odd"
// Notes
// The input will be a string of numbers.
