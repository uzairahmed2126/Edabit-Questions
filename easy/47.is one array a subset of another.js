function isSubset(subSet, superSet) {
  return subSet.every((set) => superSet.includes(set));
}
console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])); //➞ true
console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])); //➞ true
console.log(isSubset([1, 2], [3, 5, 9, 1])); //➞ false
