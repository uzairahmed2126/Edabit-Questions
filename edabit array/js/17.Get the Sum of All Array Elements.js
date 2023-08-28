function getSumOfItems(arr){
    let a=0;
    // for(let i =0; i<arr.length;i++){
    //     a+=arr[i]
    // }   
    // return a;
     
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

    return sum
}
console.log(getSumOfItems([2, 7, 4]))

console.log(getSumOfItems([45, 3, 0]))

console.log(getSumOfItems([-2, 84, 23]))

const numbers = [1, 2, 3, 4, 5];


// console.log(sum); // This will also output 15
