function arrayValuesTypes(dataType) {
  // const result = [];
  // for (let i = 0; i < dataType.length; i++) {
  //   result.push(typeof dataType[i]);
  // }
  // return result;
  return dataType.map((item) => typeof item)
}
console.log(arrayValuesTypes([1, 2, 'null', []]))

console.log(arrayValuesTypes(['214', true, false, 2, 2.15, [], null]))

console.log(
  arrayValuesTypes([21.1, 'float', 'array', ['I am array'], null, true, 214]),
)
