// Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
function generation(n, gender) {
    const generations = {
      "-3": {
        m: "great grandfather",
        f: "great grandmother"
      },
      "-2": {
        m: "grandfather",
        f: "grandmother"
      },
      "-1": {
        m: "father",
        f: "mother"
      },
      "0": {
        m: "me!",
        f: "me!"
      },
      "1": {
        m: "son",
        f: "daughter"
      },
      "2": {
        m: "grandson",
        f: "granddaughter"
      },
      "3": {
        m: "great grandson",
        f: "great granddaughter"
      }
    };
  //   if (n === 2 && gender === "f") {
  //     return "granddaughter";
  //   } else if (n === -3 && gender === "m") {
  //     return "great grandfather";
  //   } else if (n === 1 && gender === "f") {
  //     return "daughter";
  //   }
  return generations[n][gender]
}
console.log(generation(2, "f")); //➞ "granddaughter"
console.log(generation(-3, "m")); //➞ "great grandfather"
console.log(generation(1, "f")); //➞ "daughter"
// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter
