function arrnumstart(arr, starting) {
    // let a = [];
    // for (let i = starting-1; i < arr.length; i++) {
    //     a.push(arr[i]);
    // }
    // return a;
    // return arr.splice(starting-1)
    return arr.slice(starting-1)
}
console.log(arrnumstart([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
