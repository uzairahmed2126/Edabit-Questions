// Edabit Experience Points
// As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:

// Difficulty	Experience Points
// Very Easy	5XP
// Easy	10XP
// Medium	20XP
// Hard	40XP
// Very Hard	80XP
// Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.

// Examples
function getXP(obj) {
  const experiencePoint = {
    "Very Easy": 5,
    Easy: 10,
    Medium: 20,
    Hard: 40,
    "Very Hard": 80,
  };
  let keys = Object.keys(obj);
  let len = keys.length;
  let total = 0;
  for (let i = 0; i < len; i++) {
    let key = keys[i];
    total += experiencePoint[key] * obj[key];
  }
  return total + "XP";
  // return values
  // let veryEasy = 89 * 5;
  // let easy = 77 * 10;
  // let medium = 30 * 20;
  // let hard = 40 * 4;
  // let veryHard = 80 * 1;
  // return veryEasy + easy + medium + hard + veryHard;
}
console.log(
  getXP({
    "Very Easy": 89,
    Easy: 77,
    Medium: 30,
    Hard: 4,
    "Very Hard": 1,
  })
); //➞ "2055XP"

console.log(
  getXP({
    "Very Easy": 254,
    Easy: 32,
    Medium: 65,
    Hard: 51,
    "Very Hard": 34,
  })
); //➞ "7650XP"

console.log(
  getXP({
    "Very Easy": 11,
    Easy: 0,
    Medium: 2,
    Hard: 0,
    "Very Hard": 27,
  })
); //➞ "2255XP"
// Notes
// Return values as a string and make sure to add "XP" to the end.
