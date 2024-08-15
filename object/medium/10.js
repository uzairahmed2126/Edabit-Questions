// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// Examples
// function stolenItems(obj) {
//   let totalLosses = 0;
//   let arr = Object.values(obj);
//   for (let i = 0; i < arr.length; i++) {
//     totalLosses += arr[i];
//   }
//   return totalLosses === 0 ? "Lucky you!" : totalLosses;
// }
function stolenItems(obj) {
  let totalLosses = 0;
  let arr = Object.entries(obj);
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i][1];
    totalLosses += value;
  }
  return totalLosses === 0 ? "Lucky you!" : totalLosses;
}
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
