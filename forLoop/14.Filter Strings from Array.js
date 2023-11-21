function filterArray(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            a.push(arr[i])
        };
    };
    return a;
    // return arr.filter(element=>Number.isInteger(element));
};
console.log(filterArray([1, 2, 3, "a", "b", 4]));

console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));

console.log(filterArray(["Nothing", "here"])); 