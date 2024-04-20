function caeserCipher(str, shift = 3) {
  //convert to lowercase
  let newStr = str.toLowerCase()
  //convert str to unicode
  
  let utfArr = [];
  for(let i = 0; i <= newStr.length - 1; i++) {
    if((newStr.charCodeAt(i) < 97) || (newStr.charCodeAt(i) > 122)) {
      utfArr.push(newStr.charCodeAt(i))
    } else if(newStr.charCodeAt(i) + shift > 122) {
      utfArr.push(newStr.charCodeAt(i) - 26 + shift)
    } else {
      utfArr.push(newStr.charCodeAt(i) + shift)
    }
  }
  return String.fromCharCode(...utfArr).toUpperCase();
}


// console.log(caeserCipher('ze, Bra', 4));

export { caeserCipher }
