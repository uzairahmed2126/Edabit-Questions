function sortByLength(arr) {
    // return arr.sort(function (a,b){return a.length-b.length});
    let lengthOfArr = arr.length;
    for (let i = 0; i < lengthOfArr - 1; i++) {
        for (let j = 0; j < lengthOfArr - i - 1; j++) {
            if (arr[j].length > arr[j + 1].length) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            };
        };
    };
    return arr;
}
console.log(sortByLength(["Google", "Apple", "Microsoft"]));
//➞ ["Apple", "Google", "Microsoft"]

console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
//➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

console.log(sortByLength(["Turing", "Einstein", "Jung"]));
//➞ ["Jung", "Turing", "Einstein"]