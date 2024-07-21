// Join Two Portions of a Path
// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

// Examples
function joinPath(str1, str2) {
    return str1.replace("/", "") + "/" + str2.replace("/", "");
}
console.log(joinPath("portion1", "portion2")); //➞ "portion1/portion2"

console.log(joinPath("portion1/", "portion2")); //➞ "portion1/portion2"

console.log(joinPath("portion1", "/portion2")); //➞ "portion1/portion2"

console.log(joinPath("portion1/", "/portion2")); //➞ "portion1/portion2"
// Notes
// Try not to solve this challenge using only if-else conditions.
