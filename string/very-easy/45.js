// Raucous Applause
// After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.

// Examples
function countClaps(clap) {
  //   let i = 0;
  let count = 0;
  //   while (clap.length > i) {
  //     if (clap[i]==="C") {
  //       count++;
  //     }
  //     i++;
  //   }
  //   return count;
  for (let i = 0; i < clap.length; i++) {
    if (clap[i].includes("C")) {
      count++;
    }
  }
  return count;
}
console.log(countClaps("ClaClaClaClap!")); //➞ 4
console.log(countClaps("ClClClaClaClaClap!")); //➞ 6
console.log(countClaps("CCClaClClap!Clap!ClClClap!")); //➞ 9
// Notes
// Each clap starts with a capital "C".
