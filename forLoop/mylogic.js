function addBackSlash(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += '\\ ';
        } else {
            result += str[i];
        }
    }
    const createDiv = document.createElement('div');
    createDiv.innerText = result;
    document.body.append(createDiv);
    return result;
}
console.log(addBackSlash(prompt("Enter your string")));