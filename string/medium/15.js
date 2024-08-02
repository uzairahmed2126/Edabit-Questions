// Reverse Words Starting With a Particular Letter
// Write a function that reverses all the words in a sentence that start with a particular letter.

// Examples
function specialReverse(str, char) {
  let splited = str.split(" ");
  let res = [];
  for (let i = 0; i < splited.length; i++) {
    if (splited[i][0].match(char)) {
      res.push(splited[i].split("").reverse().join(""));
    } else {
      res.push(splited[i]);
    }
  }
  return res.join(" ");
  // return splited.reduce((acc,cur)=>{
  //   if(cur[0]===char) {
  //     acc.push(cur.split('').reverse().join(''));
  //   }else {
  //     acc.push(cur)
  //   }
  //   return acc
  // },[]).join(' ');
}
console.log(specialReverse("word searches are super fun", "s"));
//➞ "word sehcraes are repus fun"

console.log(specialReverse("first man to walk on the moon", "m"));
//➞ "first nam to walk on the noom"

console.log(specialReverse("peter piper picked pickled peppers", "p"));
//➞ "retep repip dekcip delkcip sreppep"
// Notes
// Reverse the words themselves, not the entire sentence.
// All characters in the sentence will be in lower case.
