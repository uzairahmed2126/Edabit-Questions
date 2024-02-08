function findLargestNums(arr) {
    const largestNums = arr.map(item => Math.max(...item));
    return largestNums;
}
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //➞ [7, 90, 2]
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); //➞ [-34, -2, 7]
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])); //➞ [0.7634, 9.32, 9]