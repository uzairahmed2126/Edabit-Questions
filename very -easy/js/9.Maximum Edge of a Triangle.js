function nextEdge(...sides){
    // return (side1+side2)-1
    // return arguments[0]+arguments[1]-1
    // return Math.max(side1+side2)-1
    // let sum = 0
    // for(const key in arguments){
    //  sum += arguments[key]
    //  console.log(sum)
    // }
    // let Maxrange = sum-1
    // return Maxrange
    const sum = sides.reduce((total, side) => total + side, 0);
    return sum -1
}
console.log(nextEdge(8, 10))
console.log(nextEdge(5, 7))
console.log(nextEdge(9, 2))
