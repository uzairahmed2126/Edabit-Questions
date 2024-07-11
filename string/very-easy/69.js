// Owofied a Sentence
// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

// Examples
function owofied(str) {
  let splited = str.split("");
  splited.push(" owo");
  return splited.reduce((acc, cur, index) => {
    acc += cur;
    if (cur === "i") {
      acc += "wi";
    } else if (cur === "e") {
      acc += "we";
    }
    return acc;
  }, "");
  //   for (let i = 0; i < splited.length; i++) {
  //     if (splited[i] === "i") {
  //       splited[i] = "wi";
  //     } else if (splited[i] === "e") {
  //       splited[i] = "we";
  //     }
  //   }
  //   return splited.join('').concat(' owo');
}
console.log(owofied("I'm gonna ride 'til I can't no more"));
//➞ "I'm gonna rwidwe 'twil I can't no morwe owo"
console.log(owofied("Do you ever feel like a plastic bag"));
//➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"
console.log(owofied("Cause baby you're a firework"));
//➞ "Causwe baby you'rwe a fwirwework owo"
// Notes
// Don't forget to return the value!
// There's a space in front of owo!
