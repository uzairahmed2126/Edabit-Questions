// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
function getVoteCount(obj) {
  //   return obj.upvotes - obj.downvotes;
  let values = Object.values(obj);
  return values[0] - values[1];
}
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); //➞ 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); //➞ -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); //➞ 0
// Notes
// You can expect only positive integers for vote counts.
