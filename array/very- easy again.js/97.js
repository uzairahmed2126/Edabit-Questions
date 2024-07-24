// Cowboy Shootout
// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

// Examples
function rogerShots(arr) {
  let totalTime = 0;
  let totalBottle = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "Bang!") {
      totalBottle += 1;
      totalTime += 0.5;
    } else if (arr[i] == "BangBang!") {
      totalBottle += 2;
      totalTime += 0.5;
    }
  }
  return totalTime;
  //   return arr.includes("Bang!", 2);
}
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"])); //➞ 3
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"])); //➞ 2.5
console.log(
  rogerShots([
    "Bang!",
    "BangBangBang!",
    "Boom!",
    "Bang!",
    "BangBang!",
    "BangBang!",
  ])
); //➞ 2
// Notes
// All the bottles will be shot down in all the tests.
