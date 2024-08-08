// Dashed Vowels
// Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

// Examples
function dashed(str) {
  let res = [];
  let splited = str.split("");
  let vowel = "aeiou";
  for (let i = 0; i < splited.length; i++) {
    if (vowel.includes(splited[i].toLowerCase())) {
      res.push("-" + splited[i] + "-");
    } else {
      res.push(splited[i]);
    }
  }
  return res.join("");
}
console.log(dashed("Edabit")); //➞ "-E-d-a-b-i-t"
console.log(dashed("Carpe Diem")); //➞ "C-a-rp-e- D-i--e-m"
console.log(dashed("Fight for your right to party!")); //➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
// Notes
// A string can contain uppercase and lowercase vowels.
// Y is not considered a vowel.
