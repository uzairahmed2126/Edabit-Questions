function isOmnipresent(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i][i]===num) {
        return true
    }
  }
//   return false;
  return arr.every((subArr) => subArr.includes(num));
}
console.log(isOmnipresent([[1, 1],[1, 3],[5, 1],[6, 1],],1)); //➞ true
console.log(isOmnipresent([[1, 1],[1, 3],[5, 1],[6, 1],],6)); //➞ false
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)); //➞ true
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)); //➞ false
