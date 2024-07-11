// Western Showdown
// Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

// Examples
function showdown(opponent1, opponent2) {
  //   let splited1 = opponent1.split(" ");
  //   let splited2 = opponent2.split(" ");
  //   let index1 = 0;
  //   let index2 = 0;
  //   for (let i = 0; i < splited1.length; i++) {
  //     if (splited1[i] === "Bang!") {
  //       index1 += i;
  //     }
  //   }
  //   for (let i = 0; i < splited2.length; i++) {
  //     if (splited2[i] === "Bang!") {
  //       index2 += i;
  //     }
  //   }
  //   if (index1 === index2) {
  //     return "tie";
  //   }else if(index1<index2) {
  //     return "p1";
  //   }else {
  //     return "p2"
  //   }
  //   if (opponent1.match("Bang!").index < opponent2.match("Bang!").index) {
  //     return "p1";
  //   } else if (
  //     opponent1.match("Bang!").index === opponent2.match("Bang!").index
  //   ) {
  //     return "tie";
  //   } else {
  //     return "p2";
  //   }
  for (let i = 0; i < opponent1.length; i++) {
    if (opponent1[i] !== " " && opponent2[i] !== " ") {
      return "tie";
    } else if (opponent1[i] !== " ") {
      return "p1";
    } else if (opponent2[i] !== " ") {
      return "p2";
    }
  }
}
console.log(showdown("   Bang!        ", "        Bang!   ")); //➞ "p1"

// p1 draws his gun sooner than p2

console.log(showdown("               Bang! ", "             Bang!   ")); //➞ "p2"

console.log(showdown("     Bang!   ", "     Bang!   ")); //➞ "tie"
// Notes
// Both strings are the same length.
