// Hot Pics of Danny DeVito!
// I'm trying to watch some lectures to study for my next exam but I keep getting distracted by meme compilations, vine compilations, anime, and more on my favorite video platform.

// Your job is to help me create a function that takes a string and checks to see if it contains the following words or phrases:

// "anime"
// "meme"
// "vines"
// "roasts"
// "Danny DeVito"
// If it does, return "NO!". Otherwise, return "Safe watching!".

// Examples
function preventDistractions(str) {
  const topic = ["anime", "meme", "vines", "roasts", "Danny DeVito"];
  //   for (let i = 0; i < str.length; i++) {
  //     if (str.includes(topic[i])) {
  //       return "NO!";
  //     }
  //   }
  //   return "Safe watching!";
  //   for (let i = 0; i < topic.length; i++) {
  const regex = new RegExp(topic.join("|"), "i");
  return str.match(regex) ? "NO!" : "Safe watching!";
  //   }
}
console.log(preventDistractions("vines that butter my eggroll")); //➞ "NO!"
console.log(preventDistractions("Hot pictures of Danny DeVito")); //➞ "NO!"
console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps")); //➞ "Safe watching!"
// Notes
// N/A
