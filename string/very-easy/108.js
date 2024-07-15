// Get the File Extension
// Write a function that maps files to their extension names.

// Examples
function getExtension(arr) {
  //   return arr.map((item) => {
  //     let splited = item.split(".");
  //     return splited.pop();
  //   });
  let extensions = [];
  for (let i = 0; i < arr.length; i++) {
    let fileName = arr[i];
    let lastDotIndex = fileName.lastIndexOf(".");

    if (lastDotIndex !== -1) {
      let extension = fileName.slice(lastDotIndex + 1);
      extensions.push(extension);
    }
  }
  return extensions;
  //   return arr.map((item) => item.substring(item.indexOf(".") + 1, item.length));
  // return arr.map((item) => item.slice(item.indexOf(".") + 1, item.length));
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
