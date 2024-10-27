// Musical Cadences
// In music, cadences act as punctuation in musical phrases, and help to mark the end of phrases. Cadences are the two chords at the end of a phrase. The different cadences are as follows:

// V followed by I is a Perfect Cadence
// IV followed by I is a Plagal Cadence
// V followed by Any chord other than I is an Interrupted Cadence
// Any chord followed by V is an Imperfect Cadence
// Create a function where given a chord progression as an array, return the type of cadence the phrase ends on.

// Examples
function findCadence(arr) {
    const [secondLast, last]=arr.slice(-2);
    if (secondLast === "V" && last === "I") {
        return "perfect";
    }
    if (secondLast === "IV" && last === "I") {
        return "plagal";
    }
    if (secondLast === "V" && last !== "I") {
        return "interrupted";
    }
    if (last === "V") {
        return "imperfect";
    }
    return "no cadence";
}
console.log(findCadence(["I", "IV", "V"])); //➞ "imperfect"

console.log(findCadence(["ii", "V", "I"])); //➞ "perfect"

console.log(findCadence(["I", "IV", "I", "V", "vi"])); //➞ "interrupted"
// Notes
// Return strings all in lowercase.
// Only focus on the last two chords of a progression.
// Return "no cadence" if none of the criteria match up.
// I is a capital i, not a lowercase L.
