function arrnumreverse(arr, reverseValue) {
    let a = []
    // for (let i = reverseValue; i >= 0; i--) {
    //     a.push(arr[i]);
    // }
    // return a;

    // return arr.splice(reverseValue);
    // arr.reverse();
    a = arr.slice(0,reverseValue);
    return a.reverse();
};
console.log(arrnumreverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));