// write a for loop that loops 1 to 20
// If the number is divisble by 3, print "Frontend"
// If the number is divisble by 5, print "Simplified"
// If the number is divisble by3 and 5, print " Frontend Simplified"
// If the number is not divisible by either 3 or 5, print the number

// for (let i = 1; i <= 20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} -> Frontend Simplified`)
//     }

//     else if (i % 3 === 0) {
//         console.log(`${i} -> Frontend`)
//     }

//     else if (i % 5 === 0) {
//         console.log(`${i} -> Simplified`)
//     }

//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }


// ________

// print out every character from the sting: 
// "Frontend Simplified"

// const str = "Frontend Simplified"

// for (let i = 0; i < str.length; ++i) {
//     console.log(str[i])
// }


// DRY - Dont repeat yourself

// function defintion
// function welcomePersonToFES(name) {
//     console.log(`Welcome to Frontend Simplified, ${name}`)
// }

// call the function
// welcomePersonToFES(`David`)
// welcomePersonToFES(`Zen`)
// welcomePersonToFES(`Mitri`)



// -------

// create a function that converts Celsius to Fahrenheit
// Celcius to Fahrenheit formula
// F = C x 1.8 + 32

// ex:
// convertCelsiusToFahreheit(0) - > 32
// convertCelsiusToFahreheit(10) - > 50
// convertCelsiusToFahreheit(30) - > 86

// function convertCelsiusToFahreheit(celcius) {
//     return celcius * 1.8 + 32
// }

// console.log(convertCelsiusToFahreheit(0))
// console.log(convertCelsiusToFahreheit(10))
// console.log(convertCelsiusToFahreheit(30))

// 2nd way to declare function

// const convertCelsiusToFahreheit = (celsius) => {
//     return celsius * 1.8 + 32
// }

// console.log(convertCelsiusToFahreheit(0))