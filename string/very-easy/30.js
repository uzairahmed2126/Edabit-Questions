// Default Mood
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

// Examples
function moodToday(mood) {
  // if(mood===undefined){
  // return `Today, I am feeling neutral`
  // }
  // return `Today, I am ${mood}`
  // return mood===undefined?`Today, I am feeling neutral`:`Today, I am ${mood}`;
  return "Today, I am feeling ".concat(mood === undefined ? "neutral" : mood);
}
console.log(moodToday("happy")); //➞ "Today, I am feeling happy"

console.log(moodToday("sad")); //➞ "Today, I am feeling sad"

console.log(moodToday()); //➞ "Today, I am feeling neutral"
// Notes
// Check the Resources tab for some helpful information.
