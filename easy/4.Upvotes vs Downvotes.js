function getVoteCount(votes) {
    // return votes.upvotes - votes.downvotes
    // return Array(votes).map(function (item) {
    //     return item.upvotes - item.downvotes;
    // });
    const { upvotes, downvotes } = votes; //this approach called distructing.
    const voteCount = [upvotes, -downvotes].reduce((total, current) => total + current, 0);
    return voteCount;
};
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); //➞ 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); //➞ -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); //➞ 0