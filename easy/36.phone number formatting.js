function formatPhoneNumber(numbers) {
    // let result = '';
    // result += `(${numbers.slice(0, 3).join('')}) `;
    // result += `${numbers.slice(3, 6).join('')}-`;
    // result += `${numbers.slice(6, numbers.length).join('')}`;
    // return result;
    
    // destructuring method
    const [a, b, c, d, e, f, g, h, i, j] = numbers;
    return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //➞ "(123) 456-7890"
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); //➞ "(519) 555-4468"
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); //➞ "(345) 501-2527"