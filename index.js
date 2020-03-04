//data types: primitive ,reference
//primitive:string,number,boolean,symbol
//reference:arrays+(arrays)
//special values: Null(object type),NaN,undefined
//---------------------------------------------------------------------------//
//string methods
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

//-----------------------------------------------------------------------------
//number methods
let d=56.56
//round the decimal places
//output:556.56000000000000227374
console.log(d.toFixed(20))
//exponent the values
//output:5.66e+1
console.log(d.toExponential(2))
//covert the number into string
//output:56.56
console.log(d.toString())
console.log(typeof(d.toString()))
//-----------------------------------------------------------------------------
//Global methods
//returns the value of the variable
//output:56.56
console.info(d)
//returns the count called function
//  output:default: 1
//  default: 2
//  default: 3
//  default: 4
//  default: 5
//  default: 6
//  default: 7
//  default: 8
//  default: 9
//  default: 10
for (let i = 0; i < 10; i++) {
  console.count();
}
//gives the warning message
//output:This is a warning!
console.warn("This is a warning!");
//print function
//output:56.56
console.log(d)
//prompt as a error
//output:56.56 as error notification
console.error(d)
//it will prompt in the page
//output:this is alert prompt
//alert("this is alert")

//create a table based on the array
//output:table with index and values
console.table(["apples", "oranges", "bananas"]);

//prompt the value that user defines
//output:shows the prompt value my value:66
//let e=prompt()
//console.log(e)

//instructs about the particular field must be done(confirmation box)
//output:box with confirmation message
// function myFunction() {
//   confirm("Press a button!");
// }
// let e=myFunction();

//check whether the number is illegal or not
//output:false
console.log(isNaN(12.35))

//reduce the other datatypes excluding the integer returns only integer value excluding the string
//otput:40
let f=parseFloat("40 years")
console.log(f)

//returns only whole number excluding other datatypes
//output:45
let g=parseInt("45.000")
console.log(g)

//converts the value of an object/variable to a string.
//output:false
let h=new Date();
console.log(String(h))

//check for the value return false for 0 and true for 1
//output:FALSE
let i=Boolean(0)
console.log(i)