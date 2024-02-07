function getOnlyEvens(arr) {
    return arr.filter(function (num, index) { return num % 2 === 0 && index % 2 === 0 });
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])) //➞ [2, 4]
console.log(getOnlyEvens([0, 1, 2, 3, 4])) //➞ [0, 2, 4]
console.log(getOnlyEvens([1, 2, 3, 4, 5])) //➞ []