function findIndex(arr, str) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === str) {
      return index
    } 
  }
  return -1

  // return arr.indexOf(str)
}
console.log(findIndex(['hi', 'edabit', 'fgh', 'abc'], 'fgh'))
console.log(findIndex(['Red', 'blue', 'Blue', 'Green'], 'blue'))
console.log(findIndex(['a', 'g', 'y', 'd'], 'd'))
console.log(findIndex(['Pineapple', 'Orange', 'Grape', 'Apple'], 'Pineapple'))
