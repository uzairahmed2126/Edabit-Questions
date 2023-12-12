function averageIndex(arr) {
    let totalSumOfAllNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        const letter = arr[i];
        const index = letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        totalSumOfAllNumber += index;
    }

    const result = totalSumOfAllNumber / arr.length;
    return Math.round(result * 100) / 100;
}

console.log(averageIndex(["a", "b", "c", "i"]));

console.log(averageIndex(["e", "d", "a", "b", "i", "t"]));

console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]));
// ➞ 3.75
// ➞ 6.83
// ➞ 12.62