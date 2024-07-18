// Find the Bomb
// Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

// Examples
function bomb(str) {
  //   return str.toLowerCase().match("bomb")
  //     ? "Duck!!!"
  //     : "There is no bomb, relax.";
  //   return str.toLowerCase().includes("bomb")
  //     ? "Duck!!!"
  //     : "There is no bomb, relax.";
  let splited = str.split(" ");
  for (let i = 0; i < splited.length; i++) {
    if (splited[i].includes("bomb")) {
      return "Duck!!!";
    }
  }
  return "There is no bomb, relax.";
}
console.log(bomb("There is a bomb.")); //➞ "Duck!!!"

console.log(bomb("Hey, did you think there is a bomb?")); //➞ "Duck!!!"

console.log(bomb("This goes boom!!!")); //➞ "There is no bomb, relax."
// Notes
// "bomb" may appear in different cases (i.e. uppercase, lowercase, mixed).
