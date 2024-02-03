function incrementItems(arr) {
    // return arr.map(element => {
    //     return element + 1;
    // });
    // return arr.reduce(acc,cur => {
    //     return acc+cur;
    // });
    let result = [];
    arr.filter(filterMethod);
    function filterMethod(item) {
        return result.push(item+1);
    };
    return result;
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     result.push(arr[i] + 1);
    // }
    // return result;
}
console.log(incrementItems([0, 1, 2, 3])); //➞ [1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8])); //➞ [3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4])); //➞ [0, -1, -2, -3]