// Back to Home?
// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

// Examples
// function backToHome(str) {
//   let mappy = {};
//   let len = str.length;
//   for (let i = 0; i < len; i++) {
//     if (mappy[str[i]] == undefined) mappy[str[i]] = 1;
//     else mappy[str[i]]++;
//   }
//   let x = mappy["S"];
//   for (let key in mappy) {
//     if (x != mappy[key]) return false;
//   }
//   return true;
// }
function backToHome(str) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "N") {
      y += 1;
    } else if (str[i] === "S") {
      y -= 1;
    } else if (str[i] === "E") {
      x += 1;
    } else if (str[i] === "W") {
      x -= 1;
    }
  }
  return x === y;
}
function backToHome(str) {
  let splited = str.split("");
  let N = 0;
  let W = 0;
  let S = 0;
  let E = 0;
  for (let i = 0; i < splited.length; i++) {
    if (splited[i] === "N") {
      N++;
    } else if (splited[i] === "W") {
      W++;
    } else if (splited[i] === "S") {
      S++;
    } else if (splited[i] === "E") {
      E++;
    }
  }
  return N === S && W === E;
}

// console.log(backToHome("NENESSWWWESN")); //➞ true
// console.log(backToHome("W")); //➞ true
// console.log(backToHome("NSEW")); //➞ true
// console.log(backToHome("NENESSW")); //➞ true
// console.log(backToHome("NENESSWW")); //➞ true
// console.log(backToHome("EEWE")); //➞ false
// console.log(backToHome("NEESSW")); //➞ false
console.log(backToHome("EEWE")); //➞ false
console.log(backToHome("NENESSWW")); //➞ true
console.log(backToHome("NEESSW")); //➞ false
// Notes
// N/A
