function getFirstValue(arr){
// let element;
// for (let index = 0; index < 1; index++) {
//     element = arr[index];
// }
// return element
// return arr[0]
return arr.shift()
}

console.log(getFirstValue([1, 2, 3])); 

console.log(getFirstValue([80, 5, 100])); 

console.log(getFirstValue([-500, 0, 50])); 