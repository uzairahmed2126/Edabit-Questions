function sortByLength(arr) {
    // return arr.sort((a, b) => { return a.length - b.length });
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].length > arr[j + 1].length) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"])); //➞["a", "bb", "ccc", "dddd"]
console.log(sortByLength(["apple", "pie", "shortcake"])); //➞["pie", "apple", "shortcake"]
console.log(sortByLength(["may", "april", "september", "august"])); //➞["may", "april", "august", "september"]
console.log(sortByLength([])); //➞[]