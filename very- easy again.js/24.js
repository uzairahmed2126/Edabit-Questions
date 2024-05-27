// Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Examples
function convert(hours, minutes) {
    const oneHour = 60;
    const oneMinute = 60;
    return oneHour * oneMinute * hours + oneMinute * minutes;
}
console.log(convert(1, 3)); //➞ 3780
console.log(convert(2, 0)); //➞ 7200
console.log(convert(0, 0)); //➞ 0
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
