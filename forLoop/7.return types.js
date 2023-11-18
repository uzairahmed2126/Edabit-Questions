function arrayValuesTypes(arr) {
    let a = [];
    for (let i = 0; i <= arr.length; i++) {
        a.push(typeof (arr[i]))
    }
    return a;
}
console.log(arrayValuesTypes([1, 2, "null", []]));
// ➞ ["number", "number", "string", "object"]

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]