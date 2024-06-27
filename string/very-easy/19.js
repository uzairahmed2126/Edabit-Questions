// Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
// Examples
function word(number) {
  let obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };
  return obj[number];
}
console.log(word("one")); //➞ 1
console.log(word("two")); //➞ 2
console.log(word("nine")); //➞ 9
// Notes
// All numbers will be single digit positive integers.
