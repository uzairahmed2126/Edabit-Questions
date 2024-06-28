// Fraction Greater Than One
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

// Examples
function greaterThanOne(str) {
    let splited = str.split("/");
    return splited[0] / splited[1] > 1;
}
console.log(greaterThanOne("1/2")); //➞ false

console.log(greaterThanOne("7/4")); //➞ true

console.log(greaterThanOne("10/10")); //➞ false
// Notes
// Fractions must be strictly greater than 1 (see example #3).
