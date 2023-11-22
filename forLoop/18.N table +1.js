function nTablesPlusOne(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += (num * i + 1) + ",";
    }
    // Remove the trailing comma
    result = result.slice(0, -1);
    return result;

}
console.log(nTablesPlusOne(7));

console.log(nTablesPlusOne(1));

console.log(nTablesPlusOne(3));

// nTablesPlusOne(7) ➞ "8,15,22,29,36,43,50,57,64,71"

// nTablesPlusOne(1) ➞ "2,3,4,5,6,7,8,9,10,11"

// nTablesPlusOne(3) ➞ "4,7,10,13,16,19,22,25,28,31"