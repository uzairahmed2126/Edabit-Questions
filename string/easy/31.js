// Prefixes vs. Suffixes
// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.

// Examples
function isPrefix(prefix, suffix) {
  let splited = suffix.split("-");
  //   return prefix.includes(splited[0]);
  //   return prefix.match(splited[0]) ? true : false;
  return prefix.startsWith(splited[0]);
}
function isSuffix(prefix, suffix) {
  let splited = suffix.split("-");
  return prefix.endsWith(splited[1]);
}
console.log(isPrefix("automation", "auto-")); //➞ true
console.log(isSuffix("arachnophobia", "-phobia")); //➞ true
console.log(isPrefix("retrospect", "sub-")); //➞ false
console.log(isSuffix("vocation", "-logy")); //➞ false
// Notes
// The prefix and suffix arguments have dashes - in them.
