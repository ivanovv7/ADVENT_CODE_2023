import * as fs from 'fs';

let dummy = fs.readFileSync("./dummy.txt")
let dummyParsed = dummy.toString("utf-8")

// console.log("BEFORE" ,dummyParsed)

// console.log("BEFORE" ,typeof(dummyParsed) )

// console.log(dummyParsed)



// console.log("Type of parsed data:", typeof(dummyParsed))

 const splitted = dummyParsed.split('\n')

const onlyNumbers = splitted.map((arraySplited) => {
  const numbersArray = arraySplited
    .split('')
    .filter((char) => !isNaN(char))
    .join('');

    return numbersArray.replace(/\r/g, '');
});

// console.log("HERE" ,onlyNumbers)

// console.log('Splitted', splitted)


const onlyFirstAndSecondNumber = onlyNumbers.map((string) => {

  
  return `${string.charAt(0)}${string.charAt(string.length-1)}`

})

// console.log(onlyFirstAndSecondNumber)  /* extracted only first and second number*/


let convertedTonumber = onlyFirstAndSecondNumber.map((string) => {

  return +string
})


console.log(convertedTonumber) /**all strings converted to numbers */

let sumOfAlls = 0

convertedTonumber.map((num) => {

  
  sumOfAlls += num

  return sumOfAlls
})

// console.log("heres",sumOfAlls)