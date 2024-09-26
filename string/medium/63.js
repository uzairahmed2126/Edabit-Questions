// Fix the Spacing
// Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence.

// Examples
function correctSpacing(str) {
  let result = "";
  let splited = str.split(" ");
  for (let i = 0; i < splited.length; i++) {
    if (splited[i] !== "") {
      result += splited[i] + " ";
    }
  }
  return result;
  // for(let i=0;i<)
}
console.log(correctSpacing("The film   starts       at      midnight. "));
//➞ "The film starts at midnight."

console.log(
  correctSpacing("The     waves were crashing  on the     shore.   ")
);
//➞ "The waves were crashing on the shore."

console.log(correctSpacing(" Always look on    the bright   side of  life."));
//➞ "Always look on the bright side of life."
// Notes
// N/A
