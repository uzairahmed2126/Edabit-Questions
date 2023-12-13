function deNest(arr) {
    let a = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '') {
            a += arr[i]
        }
    }
    return a;
}
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));

console.log(deNest([[[[[[[true]]]]]]]));

console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]])); 