function getVoteCount(votes){
    console.log(votes.upvotes-votes.downvotes);
}
getVoteCount({ upvotes: 13, downvotes: 0 }) 

getVoteCount({ upvotes: 2, downvotes: 33 })

getVoteCount({ upvotes: 132, downvotes: 132 })