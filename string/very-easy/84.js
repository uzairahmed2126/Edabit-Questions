// Broken Bridge
// Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

// Examples
function isSafeBridge(str) {
  //   return !str.includes(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return false;
    }
  }
  return true;
}
console.log(isSafeBridge("####")); //➞ true
console.log(isSafeBridge("## ####")); //➞ false
console.log(isSafeBridge("#")); //➞ true
// Notes
// You can expect the bridge's ends connecting it to its surrounding.
