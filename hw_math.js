//pre increment 
let a = 3;
let b = 4;
let regult = a+ ++b;
console.log(regult)
let c = 9;
let d = 8;
let cd = c + --d;
console.log(cd)

// post-increment
let x = 25;
let y = 10;
let z = x + y++;
console.log(z);
let p = 25;
let q = 10;
let pq = p + q--;
console.log(pq);


// pre and post-increment

let numbarOne = 500;
let numbarTwo = 200;
let numbarThree = 300;
let some = numbarOne + ++numbarTwo + numbarThree++
console.log(some)

// Apply arithmetic peration qu-no-02
let numberOne = "10"
let convertedNumOne = parseInt(numberOne)
console.log(convertedNumOne);
let numberTwo = "2"
let convertedNumTwo = parseInt(numberTwo)
console.log(convertedNumTwo);
let plus = convertedNumOne+convertedNumTwo
let minus = convertedNumOne-convertedNumTwo
let multiplication =  convertedNumOne*convertedNumTwo
let division =  convertedNumOne/convertedNumTwo
let modulas =  convertedNumOne%convertedNumTwo
let greterThen = convertedNumOne>convertedNumTwo
let lasThen = convertedNumOne<convertedNumTwo
console.log(plus,minus,multiplication,division,modulas,greterThen,lasThen)
// Apply arithmetic peration pu-no-03

let stringOne = "ten"
let stringTwo = "two"
let stringPlus = stringOne+" "+ stringTwo
let stringMinus = stringOne-stringTwo
let stringMultiplication = stringOne*stringTwo
let stringDivision = stringOne/stringTwo
let stringModulas = stringOne%stringTwo
console.log(stringPlus,stringMinus,stringMultiplication,stringDivision,stringModulas);