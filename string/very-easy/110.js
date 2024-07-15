// Letters Only
// Write a function that removes any non-letters from a string, returning a well-known film title.

// Examples
function lettersOnly(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      result.push(str[i]);
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      result.push(str[i]);
    }
  }
  return result.join("");
  //   let splited = str.split("");
  //   let result = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (/^[A-Z]/.test(str[i])) {
  //       result += splited[i];
  //     } else if (/^[a-z]/.test(str[i])) {
  //       result += splited[i];
  //     }
  //   }
  //   return result;
}
console.log(lettersOnly("R!=:~0o0./c&}9k`60=y")); //➞ "Rocky"
console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4")); //➞ "Bambi"
console.log(lettersOnly("^U)6$22>8p).")); //➞ "Up"
// Notes
// See the Resources section for more information on JavaScript string methods.
