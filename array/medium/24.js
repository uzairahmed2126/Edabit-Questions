// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
function stolenItems(obj) {
  let flated = Object.entries(obj).flat();
  return flated.reduce((acc, cur) => {
    if (typeof cur === "number") {
      acc += cur;
    }
    return acc;
  }, 0);
  //   return flated
  //   let count = 0;
  //   for (const key in obj) {
  //     count += obj[key];
  //   }
  //   if (count === 0) {
  //     return "Lucky you!";
  //   }
  //   return count;
}
// Examples
console.log(
  stolenItems({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
); //➞ 100

console.log(
  stolenItems({
    painting: 20000,
  })
); //➞ 20000

console.log(stolenItems({})); //➞ "Lucky you!"
// Notes
// The item value is always positive.
// This is my first experience in creating a challenge. I started to learn testing so I decided to give it a go here at Edabit as well. Hope I did it right... Suggestions are very welcome!
// This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that there.
