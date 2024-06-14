// Get the File Extension
// Write a function that maps files to their extension names.

// Examples
function getExtension(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(arr[i].split(".").pop());
  //   }
  //   return result;
  return arr.map((item) => {
    let parts = item.split(".");
    return parts[parts.length - 1];
  });
}
console.log(getExtension(["code.html", "code.css"]));
//➞ ["html", "css"]

console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]));
//➞ ["jpg", "pdf", "mp3"]

console.log(
  getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
);
//➞ ["rb", "cpp", "py", "js"]
// Notes
// N/A
