function getLastItem(arr) {
    // return arr.pop();
    // return arr[arr.length-1];
    // return arr.at(arr.length-1);
    // return arr.slice(arr.length - 1, 3);
    // return arr.splice(arr.length-1);
    // return arr.reverse().shift();
    // let result = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] != undefined) {
    //         result = arr[i]
    //     }
    // };
    // return result;
};
console.log(getLastItem([1, 2, 3])); //➞ 3
console.log(getLastItem(["cat", "dog", "duck"])); //➞ "duck"
console.log(getLastItem([true, false, true])); //➞ true