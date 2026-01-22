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

// --------

// let arr = [20, 30, 40, 50, 100]

// first element of array:
// console.log(arr[0])

// last Element of array:
// console.log(arr[arr.length - 1])

// add element onto end of array:
// arr.push(200)

// filter elements of an array long version:
// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element <50) {
//         return true
//     }
// })

// console.log(newArr);

// optimize version

// let newArr = arr.filter(element => element < 50)


// console.log(newArr);



// Filter out all the 'FAIL' elements in an array 
// ex: ['A+', 'A', 'FAIL'] => ['A+', 'A']
//     ['FAIL', 'FAIL', 'B'] => ['B']
//     ['FAIL'] => []


// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = grades.filter(element => element !== 'FAIL')
// console.log(goodGrades)


// let grades = ['FAIL', 'FAIL', 'B']

// let goodGrades = grades.filter(element => element === 'B')
// console.log(goodGrades)




// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = []
// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i]);
//     }
// }

// console.log(goodGrades)


// map method

// let arr = [1, 4, 9, 16]

// let newArray = arr.map((element) => 'dog')

// console.log(newArray);



// turn each element in an array of dollars into cents 
// [1, 5, 10, 3] => [100, 500, 1000, 300]
// [0, 10, 20] => [0, 1000, 2000]



// let dollars = [1, 5, 10, 3]
// let cents = dollars.map(element => element * 100)

// console.log(cents)



// let dollars = [1, 5, 10, 3]
// let cents = [];

// for (let i = 0; i < dollars.length; ++i) {
//     cents.push(dollars[i] * 100)
// }
    
// console.log(cents);



// objects

let users = [
    {
        username: 'Edwin',
        email: 'edwinalexandervargas01@gmail.com',
        password: 'test123',
        subscriptionStatus: 'VIP',
        discordId: 'Edwin Vargas#0001'
    },
    {
        username: 'Kevin',
        email: 'dior@gmail.com',
        password: 'dior123',
        subscriptionStatus: 'VIP',
        discordId: 'k.dior#0001'
    },
    {
        username: 'Adrian',
        email: 'Adrian@gmail.com',
        password: 'CanesLover123',
        subscriptionStatus: 'VIP',
        discordId: 'nsbadrian#0001'
    },
];

function login(email, password) {
    for (let i = 0; i <users.length; ++i) {
        if (users[i].email === email) {
            console.log(users[i]);
            if (users[i].password === password) {
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect - try again')
            }
            return;
        }
    }
    console.log('could not find an email that matches')
}

login('edwinalexandervargas01@gmail.com', 'test123')