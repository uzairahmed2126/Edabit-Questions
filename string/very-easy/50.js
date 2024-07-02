// City School Creating IDS
// Many IDS (for emails or Google ID) are created using the person's name.

// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

// Examples
function createID(first, second) {
    if(first.length>=1&&second.length>=3) {
        let lastNamePart = second.slice(1, 3);
        return first[0].toLowerCase() + second[0].toUpperCase() + lastNamePart.toLowerCase();
    }
  return "ID takes at least three char in last name and one in first name"
}
console.log(createID("mary", "lamb")); //➞ "mLam"
console.log(createID("John", "SMITH")); //➞ "jSmi"
console.log(createID("mary", "smith")); //➞ "mSmi"
//Notes
//There is always one character in the first name and at least three in the last name.
