// RegEx: Character Classes IX ⁠- \w
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

// Here is a list of the character classes in JavaScript:

// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// There is a hidden word in this string:

const str = "**^&$Regular#$%Expressions$%$$%^**";

const pattern = /\w/g; //['R', 'e', 'g', 'u', 'l','a', 'r', 'E', 'x', 'p','r', 'e', 's', 's', 'i','o', 'n', 's']
const patternPlus = /\w+/g; //[ 'Regular', 'Expressions' ]
const matches = str.match(pattern);
const matchesPlus = str.match(patternPlus);
console.log(matches);
console.log(matchesPlus);
// Write the regular expression that reveals the hidden word. You have to remove all of the special characters to reveal the word. Use the character class \w in your expression.

// Notes
// Check the Resources tab for details on character classes if you're stuck.
