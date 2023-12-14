function preventDistractions(str) {
    let existPharses = ["anime", "meme", "vines", "roasts", "Danny DeVito"];
    let result = '';
    for (let i = 0; i < existPharses.length; i++) {
        if (str.toLowerCase().includes(existPharses[i].toLowerCase())) {
            return  "NO!"
        } 
    }
    return "Safe watching!";
}
console.log(preventDistractions("vines that butter my eggroll"));
console.log(preventDistractions("Hot pictures of Danny DeVito"));
console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps"));
// ➞ "NO!"
// ➞ "NO!"
// ➞ "Safe watching!"