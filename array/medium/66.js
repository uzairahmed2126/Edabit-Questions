// Don't Roll Doubles!
// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.

// Examples
function diceGame(arr) {
  //   let count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     let [dice1, dice2] = arr[i];
  //     if (dice1 === dice2) {
  //       count += 0;
  //       break;
  //     } else {
  //       count += dice1 + dice2;
  //     }
  //   }
  //   return count;
  // let [dice1, dice2] = cur;
  // let stop = true;
  // if (dice1 === dice2) {
  //   stop = false;
  // }
  // if (stop) {
  //   acc += dice1 + dice2;
  // }
  // return acc;
  let i = 0;
  let count = 0;
  while (i < arr.length) {
    let [dice1, dice2] = arr[i];
    let stop = true;
    if (dice1 === dice2) {
      stop = false;
      break;
    }
    if (stop) {
      count += dice1 + dice2;
    }
    i++;
  }
  return count;
}
console.log(
  diceGame([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); //➞ 21
console.log(
  diceGame([
    [1, 1],
    [5, 6],
    [6, 4],
  ])
); //➞ 0
console.log(
  diceGame([
    [4, 5],
    [4, 5],
    [4, 5],
  ])
); //➞ 27
// Notes
// Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
// John only has two dice and will always give you outcomes for three rounds.
