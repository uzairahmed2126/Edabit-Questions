// Back to Home?
// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

// Examples
function backToHome(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] == undefined) obj[str[i]] = 1;
    else obj[str[i]]++;
  }
  for (const element in obj) {
    if (obj["S"] !== obj[element]) {
      return false;
    }
  }
  return true;
}
// function backToHome(str) {
//   let N = 0;
//   let W = 0;
//   let S = 0;
//   let E = 0;
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === "N") {
//       N++;
//     } else if (char === "W") {
//       W++;
//     } else if (char === "S") {
//       S++;
//     } else if (char === "E") {
//       E++;
//     }
//   }
//   return N === S && W === E;
// }
console.log(backToHome("EEWE")); //➞ false
console.log(backToHome("NENESSWW")); //➞ true
console.log(backToHome("NEESSW")); //➞ false
// Notes
// N/A
