function capitalLetters(howManyCapitalLetters) {
    let count = 0;
    for (let i = 0;  howManyCapitalLetters[i]!=undefined; i++) {
        // count += howManyCapitalLetters;
        if (howManyCapitalLetters[i] >= 'A' && howManyCapitalLetters[i] <= 'Z') {
            count++
        }
    }
    return count;
}
console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc"));
console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw"));
console.log(capitalLetters("mqeytbbjwqemcdrdsyvq"));
// ➞ 6
// ➞ 14
// ➞ 0