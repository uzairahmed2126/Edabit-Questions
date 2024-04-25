function toArray(value) {
  let str = "";
  str += value;
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(+str[i]);
  }
  return arr;
}
console.log(toArray(235)); //➞ [2, 3, 5]
console.log(toArray(0)); //➞ [0]

function toNumber(value) {
  let result = "";
  for (let i = 0; i < value.length; i++) {
    result += value[i];
  }
  return +result;
}
console.log(toNumber([2, 3, 5])); //➞ 235
console.log(toNumber([0])); //➞ 0
