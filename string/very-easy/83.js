// Retrieve the Subreddit
// Create a function to extract the name of the subreddit from its URL.

// Examples
function subReddit(str) {
  //   let splited = str.split("/");
  //     return splited[splited.length - 2];
  const subredditIndex = str.indexOf("/r/") + 3;
  let storeInStr = "";
  for (let i = subredditIndex; i < str.length; i++) {
    if (str[i] !== "/") {
      storeInStr += str[i];
    }
  }
  return storeInStr;
}
console.log(subReddit("https://www.reddit.com/r/funny/")); //➞ "funny"

console.log(subReddit("https://www.reddit.com/r/relationships/")); //➞ "relationships"

console.log(subReddit("https://www.reddit.com/r/mildlyinteresting/")); //➞ "mildlyinteresting"
// Notes
// N/A
