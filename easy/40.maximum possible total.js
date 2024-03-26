function maxTotal(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] < numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }

    }
    return numbers.slice(0, 5).reduce((total, num) => total + num, 0);
}
console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])) //➞ 43
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])) //➞ 100
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //➞ 40