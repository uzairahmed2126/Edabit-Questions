function giveMeSomething(string) {
  // return 'Something '+string
  // return 'Something '.concat(string)
  // return `Something ${string}`
  // return 'Something '+string.slice()
  // return 'Something '+string.substring(0)
  // return 'Something '+string.startsWith()
  // return  string.replace(/^/,'Something ')
  let a = '';
  for (let i = 0; i <= string.length; i++) {
    a = "Something " + string;
  }
  return a;
}
console.log(giveMeSomething('is better than nothing'))
console.log(giveMeSomething('Bob Jane'))
console.log(giveMeSomething('something'))

