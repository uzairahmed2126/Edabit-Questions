// Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.


// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples
function nSidedShape(n) {
  let result;
  switch (n) {
    case 1:
      result = "circle";
      break;
    case 2:
      result = "semi-circle";
      break;
    case 3:
      result = "triangle";
      break;
    case 4:
      result = "square";
      break;
    case 5:
      result = "pentagon";
      break;
    case 6:
      result = "hexagon";
      break;
    case 7:
      result = "heptagon";
      break;
    case 8:
      result = "octagon";
      break;
    case 9:
      result = "nonagon";
      break;
    case 10:
      result = "decagon";
      break;
    default:
      result = "not match";
  }
  return result;
}
console.log(nSidedShape(3)); //➞ "triangle"
console.log(nSidedShape(1)); //➞ "circle"
console.log(nSidedShape(9)); //➞ "nonagon"
console.log(nSidedShape(10)); //➞ "decagon"

// Notes
// There won't be any tests with a number below 1 or greater than 10.
// Return the output in lowercase.
// The challenge is intended to be completed without conditionals (it would take too long)!
