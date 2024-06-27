// Buggy Code (Part 4)
// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

// Examples
function greeting(str) {
    if (str === "Mubashir") {
      return "Hello, " + "my Love!";
    }
    // return "Hello, "+str+'!';
    return str.includes("Mubashir")
      ? 'Hello , my Love!':"Hello, " + str + "!"
  }
  console.log(greeting("Matt")); //➞ "Hello, Matt!"
  
  console.log(greeting("Helen")); //➞ "Hello, Helen!"
  
  console.log(greeting("Mubashir")); //➞ "Hello, my Love!"
  // Notes
  // READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
  // Don't overthink this challenge; it's not supposed to be hard.
  