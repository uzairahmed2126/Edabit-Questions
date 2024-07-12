// CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// Examples
function cmsSelector(arr, word) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase().includes(word)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
return arr.reduce((acc,cur)=>{
    if(cur.toLowerCase().includes(word)) {
        acc.push(cur);
    }
    return acc
},[])
}
console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w")); //➞ ["WordPress"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru")); //➞ ["Drupal"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "")); //➞ ["Drupal", "Joomla", "Magento", "WordPress"]
// Notes
// The given letter(s) are case sensitive and can be more than one.
// In the case of an empty string, return the entire array.
// A CMS is a Content Management System.
