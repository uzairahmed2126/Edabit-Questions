function societyName(arr) {
    let sortedArr = arr.sort();
    let result = "";
    for (let i = 0; i < sortedArr.length; i++) {
        result += arr[i][0];
    };
    return result;
}
console.log(societyName(["Adam", "Sarah", "Malcolm"])) //➞ "AMS"
console.log(societyName(["Harry", "Newt", "Luna", "Cho"])) //➞ "CHLN"
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) //➞ "CJMPRR"