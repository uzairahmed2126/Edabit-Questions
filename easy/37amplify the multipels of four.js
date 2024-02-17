function amplify(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i % 4 === 0) {
            result.push(i * 10);
        }
        else {
            result.push(i);
        }
    }
    //  return ;
    return result
}
console.log(amplify(4)); //➞[1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40
console.log(amplify(3)); //➞[1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4
console.log(amplify(25)); //➞[1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.