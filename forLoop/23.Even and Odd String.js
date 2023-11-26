function evenOddString(txt) {
    let evenChars = '';
    let oddChars = '';
  
    for (let i = 0; i < txt.length; i++) {
      if (i % 2 === 0) {
        // Even-indexed characters
        evenChars += txt[i];
      } else {
        // Odd-indexed characters
        oddChars += txt[i];
      }
    }
  
    // Join even and odd character strings with a space
    return evenChars + ' ' + oddChars;
}

console.log(evenOddString("mubashir"));
// Letters at even indexes = "mbsi"
// Letters at odd indexes = "uahr"
// Join both strings with a space

console.log(evenOddString("edabit"));

console.log(evenOddString("airforce"));

// ➞ "mbsi uahr"
// ➞ "eai dbt"
// ➞ "aroc ifre"

