function calculateDifference(items, limit) {
    const totalValue = Object.values(items).reduce((acc, value) => acc + value, 0);
    const difference = totalValue - limit;
    return difference;
}
console.log(calculateDifference({ "baseball bat": 20 }, 5)); //➞ 15
console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); //➞ 11
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); //➞ 1