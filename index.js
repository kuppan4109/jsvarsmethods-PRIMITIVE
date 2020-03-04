//data types: primitive ,reference
//primitive:string,number,boolean,symbol
//reference:arrays+(arrays)
//special values: Null(object type),NaN,undefined
 //string defined
let a='hello';
//returns length of the string
//output:5
console.log(a.length)
//string defined
let b='hello'
//combined two string
//output:hellohello
console.log(a.concat(b))
//check the string whether it ends with the defined word
//output:true
console.log(a.endsWith("lo"))
//new string c
let c='ell'
//check the string whether it contains the particular word or letter
//output:true
console.log(a.includes(c))
//returns the index of particular word or letter
//output:2
console.log(a.indexOf('l'))
//returns the last index of the word
//output:2
console.log(a.lastIndexOf('l'))
//repeat the word based on the value defined
//output:hellohellohello
console.log(a.repeat(3))
//replaces current word with new word
//output:goodluck
console.log(a.replace("hello", "goodluck"))
//search for the particular string and returns starting position
//output:0
console.log(a.search('hello'))
//display the words between that index
//output:ll
console.log(a.slice(2,4))
//splits the character based on the value defined
//output:["h", "e", "l", "l", "o"]
console.log(a.split(""))
//check the word does it starts with that letter
//output:true
console.log(a.startsWith('h'))
//similar to slice returns values inbetween
//output:llo
console.log(a.substr(2,4))
//it doesn't include the last index
//output:ll
console.log(a.substring(2,4))
//returns lowercase
//output:hello
console.log(a.toLowerCase())
//returns uppercase
//output:HELLO
console.log(a.toUpperCase())
//display without whitespace
//output:hello
console.log(a.trim())
