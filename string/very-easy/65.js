// Even and Odd Strings
// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

// Examples
function evenOddString(str) {
  let result = [[], []];
  let splited = str.split("");
  //   let filterd = splited.reduce(
  //     (acc, cur, index) => {
  //       if (index % 2 === 0) {
  //         acc[0].push(cur);
  //       } else {
  //         acc[1].push(cur);
  //       }
  //       return acc;
  //     },
  //     [[], []]
  //   );
  for (let i = 0; i < splited.length; i++) {
    if (i % 2 === 0) {
      result[0].push(splited[i]);
    } else {
      result[1].push(splited[i]);
    }
  }
  return result[0].join("") + " " + result[1].join("");
  //   return filterd[0].join("") + " " + filterd[1].join("");
}
console.log(evenOddString("mubashir")); //➞ "mbsi uahr"
// Letters at even indexes = "mbsi"
// Letters at odd indexes = "uahr"
// Join both strings with a space
console.log(evenOddString("edabit")); //➞ "eai dbt"
console.log(evenOddString("airforce")); //➞ "aroc ifre"
// Notes
// There will be no space in the given string.
