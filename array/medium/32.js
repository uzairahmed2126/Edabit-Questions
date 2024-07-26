// ES6: Destructuring Arrays V
// ES6 Destructuring can come in handy when you use regular expressions. Here is a function that uses a regular expression to parse a URL.

// const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
function parseURL(url) {
  // Parse the URL using a regular expression
  const parsedURL = /^(\w+):\/\/([^\/]+)\/(.*)$/.exec(url);

  // Destructure the result to extract protocol, host, and path
  const [urlPath, protocol, host, path] = parsedURL;

  // Return the extracted values
  return [urlPath, protocol, host, path];
}
console.log(parseURL("https://developer.mozilla.org/en-US/Web/JavaScript"));
// returns ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

// the protocol = https
// the host = developer.mozilla.org
// the path = en-US/Web/JavaScript
// From the parsedURL result you could assign these segments using ES6 array destructuring.

// Challenge
// Assign the variables protocol, host, path inside the brackets of the given string.
// Pay close attention to what is being returned from parsedURL, as you will need to skip over any values that are not protocol, host, or path.
