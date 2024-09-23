// Running Athlete 🏃
// No description.
// Guess the code from test cases.
// Examples
// function runningAthlete(arr, val) {
//   let len = arr.length;
//   let str = "";
//   for (let i = 0; i < len; i++) {
//     let athlete = arr[i];
//     let runAndJump = val[i];
//     if (athlete === "run") {
//       if (runAndJump === "_") {
//         str += "_";
//       } else {
//         str += "/";
//       }
//     } else if (athlete === "jump") {
//       if (runAndJump === "|") {
//         str += "|";
//       } else {
//         str += "x";
//       }
//     }
//   }
//   return str;
// }
function runningAthlete(arr, val) {
  return arr.map((item, index) => {
    let road = val[index];
    if (item === "run") {
      if (road === "_") {
        return "_";
      } else {
        return "/";
      }
    } else if (item === "jump") {
      if (road === "|") {
        return "|";
      } else {
        return "x";
      }
    }
  }).join('');
}
console.log(runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_")); //➞ "_|_|_"
console.log(runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_")); //➞ "_|_/_"
console.log(runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_")); //➞ "x|x|x"
console.log(runningAthlete(["run", "run", "run", "run", "run"], "_|_|_")); //➞ "_/_/_"
// Notes
// N/A
