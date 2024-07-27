// H4ck3r Sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// Examples
// function hackerSpeak(str) {
//   let splited = str.split("");
//   for (let i = 0; i < splited.length; i++) {
//     switch (splited[i]) {
//       case "a":
//         splited[i] = 4;
//         break;
//       case "e":
//         splited[i] = 3;
//         break;
//       case "i":
//         splited[i] = 1;
//         break;
//       case "o":
//         splited[i] = 0;
//         break;
//       case "s":
//         splited[i] = 5;
//         break;
//     }
//   }
//   return splited.join("");
// }
function hackerSpeak(str) {
  const replacements = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5",
  };
  let splited = str.split("");
  return splited.map((item) => replacements[item] || item).join("");
}
console.log(hackerSpeak("javascript is cool")); //➞ "j4v45cr1pt 15 c00l"

console.log(hackerSpeak("programming is fun")); //➞ "pr0gr4mm1ng 15 fun"

console.log(hackerSpeak("become a coder")); //➞ "b3c0m3 4 c0d3r"
// Notes
// In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5./
