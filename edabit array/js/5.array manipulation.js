function incrementItems(inc){
    for(let i=0;i<4;i++){
         console.log(inc[i]+1)

    }
    console.log("\n")

}
incrementItems([0, 1, 2, 3]);
incrementItems([2, 4, 6, 8]);
incrementItems([-1, -2, -3, -4]);

console.log("\n");
function incrementItems(increment){
    return console.log(increment[0]+1,increment[1]+1,increment[2]+1,increment[3]+1);

}
incrementItems([0, 1, 2, 3]);
incrementItems([2, 4, 6, 8]);
incrementItems([-1, -2, -3, -4]);