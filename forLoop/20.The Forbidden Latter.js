function forbiddenLetter(letter, words) {
    if (words == []) {
        return true;
    }
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(letter)) {
            return false;
        }
    }
    return true;
}
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));

console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));

console.log(forbiddenLetter("m", []));

// ➞ false
// ➞ true
// ➞ true