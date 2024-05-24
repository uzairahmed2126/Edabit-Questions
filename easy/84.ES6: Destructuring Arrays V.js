// ES6: Destructuring Arrays V
// ES6 Destructuring can come in handy when you use regular expressions. Here is a function that uses a regular expression to parse a URL.
function parseURL(url) {
//   const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  const mysurl= /^(\w+)\:\/\/([^\/]+)\/(.*)/.exec(url)
  const [, protocol, host, path] = mysurl; // Destructuring the array

  console.log(`Protocol: ${protocol}`);
  console.log(`Host: ${host}`);
  console.log(`Path: ${path}`);
}

// Test the function
parseURL("https://developer.mozilla.org/en-US/Web/JavaScript");
// Output:
// Protocol: https
// Host: developer.mozilla.org
// Path: en-US/Web/JavaScript

// const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)
// console.log(parsedURL)
// console.log(parseURL("https://developer.mozilla.org/en-US/Web/JavaScript"))
// returns ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

// the protocol = https
// the host = developer.mozilla.org
// the path = en-US/Web/JavaScript
// From the parsedURL result you could assign these segments using ES6 array destructuring.

// Challenge
// Assign the variables protocol, host, path inside the brackets of the given string.
// Pay close attention to what is being returned from parsedURL, as you will need to skip over any values that are not protocol, host, or path.
