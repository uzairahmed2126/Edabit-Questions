function word(str){
    // for(let i =0; i<str.length;i++){
    //     if(str==='one'){
    //         return 1
    //     }else if(str==='two'){
    //         return 2
    //     }else if (str==='nine'){
    //         return 3
    //     }
    //     return -1
    // }
    // return undefined
    const wordToNumber = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 0,
      };
    
    //   if (wordToNumber.hasOwnProperty(str)) {
    //     return wordToNumber[str];
    //   }
    for(const num in wordToNumber){
        if(num===str){
            return wordToNumber[num]
        }
    }
      return undefined;

}
console.log(word('one'))

console.log(word('two'))

console.log(word('nine'))
